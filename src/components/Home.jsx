
import { Container } from 'react-bootstrap'

import AddPost from './AddPost'
import Feed from './Feed'
import Footer from './Footer'
import Navbar from './Navbar'
import PostList from './PostList'
import Profile from './Profile'

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Profile />
            <AddPost />
            <PostList />
            <Feed />
            <Footer />

        </Container>
    )
}

export default Home