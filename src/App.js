import { useState } from "react"

import { Routes, Route } from "react-router-dom"

import AuthPage from "./pages/AuthPage"
import OrderHistoryPage from "./pages/OrderHistoryPage"
import NavBar from "./components/NavBar"

import { getUser } from "./utilities/users-service"

import "./App.css"

// TODO: Remove order related paths and update user pathways to update users

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  )
}

export default App
