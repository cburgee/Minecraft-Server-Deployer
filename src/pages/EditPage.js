import EditUserForm from "../components/EditUserForm"

function EditPage({ user }) {
  return (
    <div>
      <h1>Edit your user:</h1>
      <EditUserForm user={user} />
    </div>
  )
}

export default EditPage
