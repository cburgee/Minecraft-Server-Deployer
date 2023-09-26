import { Link } from "react-router-dom"
import { logOut } from "../utilities/users-service"
import styles from "./NavBar.module.css"

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut()
    setUser(null)
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.welcomeMsg}>Welcome, {user.name}</h2>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Link className={styles.link} to="/user/profile">
            Profile
          </Link>
          <Link className={styles.link} to="/user/edit">
            Edit User
          </Link>
          <Link className={styles.link} to="/user/delete">
            Delete Current User
          </Link>
          <Link className={styles.link} to="/weather-page">
            Current weather
          </Link>
          <Link className={styles.link} to="" onClick={handleLogOut}>
            Logout
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
