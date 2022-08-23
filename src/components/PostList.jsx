import "../style/PostList.css"
import Post from './Post'
import { useDispatch, useSelector } from "react-redux/es/exports"
import { useEffect,useState } from "react"
import { getAllPostsActionWithThunk,resetLoadingAction } from "../redux/actions"


const PostList = () => {
 const dispatch =  useDispatch()
 const change = useSelector((state)=> state.allChanges.changes)
 console.log(change)
  
 let posts =  useSelector((state) => state.allPosts.allPosts[0] )
 
 
 useEffect(()=>{
   dispatch(getAllPostsActionWithThunk())
   
   
 },[change])






  useEffect(()=> {
    dispatch(getAllPostsActionWithThunk())
    resetLoadingAction()
  },[])


  return (
        <div className='post-list'>
          <Post data={posts[2258]}  />
          {posts.slice(0,12).map((post)=>(
            <Post key={post._id} data={post}/>
          ))}
        </div>
    )
}

export default PostList