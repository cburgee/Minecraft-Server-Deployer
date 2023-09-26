//* Request handler Logic
const User = require("../../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//* /*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" })
}

async function create(req, res) {
  // console.log('[From POST handler]', req.body)
  try {
    //* creating a new user
    const user = await User.create(req.body)
    console.log(user)

    //* creating a new jwt
    const token = createJWT(user)

    res.json(token)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

async function editUser(req, res) {
  try {
    if (!req.user) {
      throw new Error()
    }
    User.findById(req.user._id, (err, user) => {
      if (err) throw new Error()

      console.log(req.body)

      // Update all user attributes which are different or missing from user with values from req.body
      Object.assign(user, req.body)

      user.save().then((savedUser) => {
        console.log(savedUser)
        res.json(savedUser)
      })
    })
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

async function getUser(req, res) {
  try {
    if (!req.user) {
      throw new Error()
    }
    const user = await User.findById(req.user._id)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

async function deleteUser(req, res) {
  try {
    if (!req.user) {
      throw new Error()
    }
    await User.findByIdAndDelete(req.user._id)
    res.send("User has been deleted.")
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

async function login(req, res) {
  try {
    // find user in db
    const user = await User.findOne({ email: req.body.email })
    // check if we found an user
    if (!user) throw new Error()
    // compare the password to hashed password
    const match = await bcrypt.compare(req.body.password, user.password)
    // check is password matched
    if (!match) throw new Error()
    // send back a new token with the user data in the payload
    res.json(createJWT(user))
  } catch {
    res.status(400).json("Bad Credentials")
  }
}

async function checkToken(req, res) {
  console.log(req.user)
  res.json(req.exp)
}

module.exports = {
  create,
  login,
  checkToken,
  editUser,
  getUser,
  deleteUser,
  getAllUsers,
}
