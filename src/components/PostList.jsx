import "../style/PostList.css"
import Post from './Post'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux/es/exports"
import { useEffect } from "react"
import { getAllPostsActionWithThunk } from "../redux/actions"


const PostList = () => {
 const dispatch =  useDispatch()
  let id = useParams()._id  
 let posts =  useSelector((state) => state.allPosts.allPosts )
 let postsToDisplay = []
 

 const pickPostsToDisplay = () => {
  for (let index = 0; index < 10; index++) {
    const post =posts[0][index];
    postsToDisplay.push(post)
  }
  console.log(postsToDisplay)
 }

  useEffect(()=> {
    dispatch(getAllPostsActionWithThunk())
    pickPostsToDisplay()
  },[])


  return (
        <div className='post-list'>
          
          {posts[0].slice(0,3).map((post)=>(
            <Post key={post._id}/>
          ))}
        </div>
    )
}

export default PostList