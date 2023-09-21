import { useState } from "react"
// TODO: Add form for updating the user here. Data has been retrieved, need to populate form with current data to edit.
// TODO: Make Call to user-service to update user.
// TODO: For that to happen you need to make a user-api call to the backend to update the database

function EditUserForm({ user }) {
  console.log(user)
  const [formData, setFormData] = useState(null)
  return (
    <div>
      <p>InsideForm</p>
    </div>
  )
}

export default EditUserForm
