/** @format */

import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import UserProfile from "./pages/UserProfilePage"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/profile-page/:name' element={<ProfilePage />} />
      <Route path='/user-profile/:_id' element={<UserProfile />} />
    </Routes>
  </BrowserRouter>
)

export default App
