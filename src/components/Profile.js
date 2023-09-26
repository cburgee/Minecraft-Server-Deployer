function Profile({ user }) {
  return (
    <div>
      <h1>Hello, {user.name}</h1>
      <h3>Username: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Hashed Password: {user.password}</h3>
    </div>
  )
}

export default Profile
