import {useEffect} from 'react'
import { getMyProfileDataActionWithThunk,getAllProfilesActionWithThunk,getProfileBasedOnId } from '../redux/actions'
import { useDispatch } from 'react-redux'

const PostList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getProfileBasedOnId("5fc4ae95b708c200175de88d"))
    },[])

    return (
        <div>PostList</div>
    )
}

export default PostList