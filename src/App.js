/** @format */

import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./components/HomePage"
import ProfilePage from "./components/ProfilePage"
import UserProfile from "./components/UserProfile"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/profile-page' element={<ProfilePage />} />
      <Route path='/user-profile' element={<UserProfile />} />
    </Routes>
  </BrowserRouter>
)

export default App
