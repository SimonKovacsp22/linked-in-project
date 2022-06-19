
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getAllProfilesActionWithThunk, getMyProfileDataActionWithThunk } from '../redux/actions'

import "../style/HomePage.css"

import About from './About'
import AddPost from './AddPost'
import Feed from './Feed'
import Footer from './Footer'
import Navbar from './Navbar'
import PostList from './PostList'
import Profile from './Profile'

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyProfileDataActionWithThunk())
        dispatch(getAllProfilesActionWithThunk())  
    }, [])

    const [searchResult,setSearchResult]=useState([])
    const [searchTerm,setSearchTerm]= useState('')
    return (
        <Container>
            <Navbar setSearchResult={setSearchResult} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchResult={searchResult}/>
            <div className='d-flex justify-content-between' style={{ marginTop: "10vh" }}>
                <div>
                    <Profile />
                    <About />
                </div>

                <div>
                    <AddPost />
                    <PostList />
                </div>
                <div>
                    <Feed />
                    
                    <Footer />
                </div>
            </div>




        </Container >
    )
}

export default HomePage