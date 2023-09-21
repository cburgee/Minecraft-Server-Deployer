import { Link } from "react-router-dom"
import { logOut } from "../utilities/users-service"

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut()
    setUser(null)
  }
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <p>Welcome, {user.name}</p> |
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  )
}

export default NavBar
