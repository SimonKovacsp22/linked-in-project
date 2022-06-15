import {useEffect} from 'react'
import { getMyProfileDataActionWithThunk } from '../redux/actions'
import { useDispatch } from 'react-redux'

const PostList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getMyProfileDataActionWithThunk())
    },[])

    return (
        <div>PostList</div>
    )
}

export default PostList