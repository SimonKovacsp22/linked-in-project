/** @format */

import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {
  getAllProfilesActionWithThunk,
  getMyProfileDataActionWithThunk,
} from "../redux/actions"

import "../style/HomePage.css"

import About from "../components/About"
import AddPost from "../components/AddPost"
import Feed from "../components/Feed"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PostList from "../components/PostList"
import Profile from "../components/Profile"
import OutsideAlerter from "../hooks/ClickOutHook"

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyProfileDataActionWithThunk())
    dispatch(getAllProfilesActionWithThunk())
  }, [])

  const [searchResult, setSearchResult] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <Container className='home-main-container'>
      <Navbar
        setSearchResult={setSearchResult}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResult={searchResult}
      />
      <div className='d-flex justify-content-between home-container'>
        <div className='mt-3'>
          <Profile />
          <About />
        </div>

        <div className='mt-3 mx-2'>
          <AddPost />
          <PostList />
        </div>
        <div className='mt-3'>
          <Feed />
          <Footer />
        </div>
      </div>
      
    </Container>
  )
}

export default HomePage
