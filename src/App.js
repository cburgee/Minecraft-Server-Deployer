import { useState } from "react"

import { Routes, Route } from "react-router-dom"

import AuthPage from "./pages/AuthPage"
import EditPage from "./pages/EditPage"
import NavBar from "./components/NavBar"
import ProfilePage from "./pages/ProfilePage"
import DeleteConfirmationPage from "./pages/DeleteConfirmationPage"

import { getUser } from "./utilities/users-service"

import "./App.css"
import WeatherPage from "./pages/WeatherPage"

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/weather-page" element={<WeatherPage />} />
            <Route path="/user/edit" element={<EditPage user={user} />} />
            <Route path="/user/profile" element={<ProfilePage user={user} />} />
            <Route
              path="/user/delete"
              element={<DeleteConfirmationPage setUser={setUser} user={user} />}
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
