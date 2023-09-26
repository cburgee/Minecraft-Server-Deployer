import Profile from "../components/Profile"
function ProfilePage({ user }) {
  return (
    <div>
      <Profile user={user} />
    </div>
  )
}

export default ProfilePage
