
import { Container } from 'react-bootstrap'
import About from './About'

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
            <div className='d-flex justify-content-between'>
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




        </Container>
    )
}

export default Home