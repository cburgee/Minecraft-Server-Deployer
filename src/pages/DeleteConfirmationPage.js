import { deleteUser } from "../utilities/users-service"
import { logOut } from "../utilities/users-service"
import { Link } from "react-router-dom"

function DeleteConfirmationPage({ user }) {
  async function handleDelete(evt) {
    evt.preventDefault()
    console.log("DELETING")
    await deleteUser(user)
    console.log("DELETED")
    logOut()
  }
  return (
    <div>
      <h1>Are you sure you want to delete your account?</h1>
      <Link to="" onClick={handleDelete}>
        Confirm Delete.
      </Link>
    </div>
  )
}

export default DeleteConfirmationPage
