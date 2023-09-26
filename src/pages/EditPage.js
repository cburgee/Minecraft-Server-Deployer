import EditUserForm from "../components/EditUserForm"
import styles from "./EditPage.module.css"

function EditPage({ user }) {
  return (
    <div>
      <h1 className={styles.title}>Edit your user:</h1>
      <EditUserForm user={user} />
    </div>
  )
}

export default EditPage
