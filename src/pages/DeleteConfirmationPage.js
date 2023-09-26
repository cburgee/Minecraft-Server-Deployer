import { deleteUser } from "../utilities/users-service"
import { logOut } from "../utilities/users-service"
import { Link } from "react-router-dom"
import styles from "./DeleteConfirmationPage.module.css"

function DeleteConfirmationPage({ user, setUser }) {
  async function handleDelete(evt) {
    evt.preventDefault()
    await deleteUser()
    logOut()
    setUser(null)
  }
  return (
    <div>
      <h1 className={styles.title}>
        Are you sure you want to delete your account?
      </h1>
      <Link className={styles.deletebutton} to="/users" onClick={handleDelete}>
        Delete
      </Link>
    </div>
  )
}

export default DeleteConfirmationPage
