import { Link } from "react-router-dom"
import { logOut } from "../utilities/users-service"

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut()
    setUser(null)
  }
  return (
    <nav>
      <Link to="/orders">Registered Users</Link>
      &nbsp; | &nbsp;
      <p>Welcome, {user.name}</p> | <Link to="/orders/edit">Edit User</Link> |
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  )
}

export default NavBar
