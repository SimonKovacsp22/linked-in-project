/** @format */

import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import UserProfile from "./pages/UserProfilePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />

      <Route path='/profile-page/:name' element={<ProfilePage />} />
      <Route path='/user-profile/:_id' element={<UserProfile />} />
    </Routes>
  </BrowserRouter>
)

export default App
