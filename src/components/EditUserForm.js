import { useState } from "react"
import { EditUser } from "../utilities/users-service"

// TODO: Add form for updating the user here. Data has been retrieved, need to populate form with current data to edit.
// TODO: Make Call to user-service to update user.
// TODO: For that to happen you need to make a user-api call to the backend to update the database

function EditUserForm({ user }) {
  console.log(user)
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }
      // returns a token with the user info
      console.log(userData)
      await EditUser(userData) // user service
    } catch (error) {
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" })
    }
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value, error: "" })
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Confirm</button>
        </form>
      </div>

      <p className="error-message">{formData.error}</p>
    </div>
  )
}

export default EditUserForm
