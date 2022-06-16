import {useEffect} from 'react'
import { getMyProfileDataActionWithThunk,getAllProfilesActionWithThunk,getProfileBasedOnId,getSingleUserExperiencesBasedOnId } from '../redux/actions'
import { useDispatch } from 'react-redux'

const PostList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getSingleUserExperiencesBasedOnId("5fc4af46b708c200175de88f"))
      dispatch(getAllProfilesActionWithThunk())
    },[])

    return (
        <div>PostList</div>
    )
}

export default PostList