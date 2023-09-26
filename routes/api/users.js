//* Routing Logic

const express = require("express")
const router = express.Router()
const usersCtrl = require("../../controllers/api/users")
const ensureLoggedIn = require("../../config/ensureLoggedIn")

//* POST
router.post("/", usersCtrl.create)

router.get("/", usersCtrl.getAllUsers)

router.put("/edit", usersCtrl.editUser)

router.get("/me", usersCtrl.getUser)

router.delete("/delete", usersCtrl.deleteUser)

router.post("/login", usersCtrl.login)

router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken)

module.exports = router
