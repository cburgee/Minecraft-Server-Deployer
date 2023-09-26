import { useState } from "react"

import { Routes, Route } from "react-router-dom"

import AuthPage from "./pages/AuthPage"
import UsersPage from "./pages/UsersPage"
import EditPage from "./pages/EditPage"
import NavBar from "./components/NavBar"
import DeleteConfirmationPage from "./pages/DeleteConfirmationPage"

import { getUser } from "./utilities/users-service"

import "./App.css"

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/user/edit" element={<EditPage user={user} />} />
            <Route
              path="/user/delete"
              element={<DeleteConfirmationPage user={user} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  )
}

export default App
