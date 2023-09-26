import Profile from "../components/Profile"
function ProfilePage({ user }) {
  return (
    <div>
      <h1>Profile Page</h1>
      <Profile user={user} />
    </div>
  )
}

export default ProfilePage
