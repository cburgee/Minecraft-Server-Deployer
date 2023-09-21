import EditUserForm from "../components/EditUserForm"

function EditPage({ user }) {
  return (
    <div>
      <h1>EditingPage</h1>
      <EditUserForm user={user} />
    </div>
  )
}

export default EditPage
