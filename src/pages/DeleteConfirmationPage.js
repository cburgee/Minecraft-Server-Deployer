import { deleteUser } from "../utilities/users-service"
import { logOut } from "../utilities/users-service"
import { Link } from "react-router-dom"

function DeleteConfirmationPage({ user, setUser }) {
  async function handleDelete(evt) {
    evt.preventDefault()
    await deleteUser()
    logOut()
    setUser(null)
  }
  return (
    <div>
      <h1>Are you sure you want to delete your account?</h1>
      <Link to="/users" onClick={handleDelete}>
        Confirm Delete.
      </Link>
    </div>
  )
}

export default DeleteConfirmationPage
