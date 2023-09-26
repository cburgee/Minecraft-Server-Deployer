import { Link } from "react-router-dom"
import { logOut } from "../utilities/users-service"

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut()
    setUser(null)
  }
  return (
    <nav>
      <Link to="/user/profile">Profile</Link> |<p>Welcome, {user.name}</p> |{" "}
      <Link to="/user/edit">Edit User</Link> |{" "}
      <Link to="/user/delete">Delete Current User</Link> |
      <Link to="/weather-page">Current weather</Link> |
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>{" "}
    </nav>
  )
}

export default NavBar
