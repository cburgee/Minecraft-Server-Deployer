import * as usersApi from "./users-api"

//* Get Token
export function getToken() {
  const token = localStorage.getItem("token")
  // if there is no token
  if (!token) return null

  const payload = JSON.parse(atob(token.split(".")[1]))
  console.log(payload)

  // if token is expired
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token")
    return null
  }

  // token is valid
  return token
}

//* Get User
export function getUser() {
  const token = getToken()
  return token ? JSON.parse(atob(token.split(".")[1])).user : null
}

//* SignUp
export async function signUp(userData) {
  const token = await usersApi.signUp(userData)
  // saves token to localStorage
  localStorage.setItem("token", token)

  return getUser()
}

export async function EditUser(userData) {
  await usersApi.EditUser(userData)
}

export async function deleteUser() {
  await usersApi.deleteUser()
}

//* LogOut
export function logOut() {
  localStorage.removeItem("token")
}

export async function login(credentials) {
  const token = await usersApi.login(credentials)
  localStorage.setItem("token", token)
  return getUser()
}

export async function checkToken() {
  return usersApi.checkToken().then((dateStr) => new Date(dateStr))
}
