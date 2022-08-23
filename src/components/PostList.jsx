import React from "react"
import "../style/PostList.css"
import Post from "./Post"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { useEffect, useState } from "react"
import {
  getAllPostsActionWithThunk,
  resetLoadingAction,
} from "../redux/actions"

const PostList = () => {

 const dispatch =  useDispatch()
 const change = useSelector((state)=> state.allChanges.changes)

 useEffect(()=>{
  dispatch(getAllPostsActionWithThunk())
  
  
},[change])

 useEffect(()=> {
 
   resetLoadingAction()
 },[])

  
 let posts =  useSelector((state) => state.allPosts.allPosts )
 
 



  return (
        <div className='post-list'>
       
          {posts?.map((post)=>(
            <Post key={post._id} data={post}/>
          ))}
        </div>
    )

}

export default PostList

