import styles from "./Profile.module.css"
function Profile({ user }) {
  return (
    <ul className={styles.container}>
      <li className={styles.title}>Hello, {user.name}</li>
      <li className={styles.body}>Username: {user.name}</li>
      <li className={styles.body}>Email: {user.email}</li>
      <li className={styles.body}>Hashed Password: {user.password}</li>
    </ul>
  )
}

export default Profile
