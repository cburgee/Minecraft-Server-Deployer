import { Link } from "react-router-dom"
import { logOut } from "../utilities/users-service"

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut()
    setUser(null)
  }
  return (
    <nav>
      <Link to="/users">Registered Users</Link>
      &nbsp; | &nbsp;
      <p>Welcome, {user.name}</p> | <Link to="/user/edit">Edit User</Link> |{" "}
      <Link to="/user/delete">Delete Current User</Link>
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
      <Link to="http://localhost:3001/api/users/">ALLUSERS</Link>
    </nav>
  )
}

export default NavBar
