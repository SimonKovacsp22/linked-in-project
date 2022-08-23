import {GET_DATA_FOR_ALL_POSTS , CREATE_POST} from '../actions'

const initialState = {
  allPosts: [],
}

const allPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FOR_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload
      }

    case CREATE_POST:
      return {
        ...state, allPosts:[...state.allPosts,action.payload]
      }

    default:
      return state
  }
}

export default allPostsReducer