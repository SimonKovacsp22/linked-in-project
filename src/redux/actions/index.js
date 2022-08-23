import axios from "axios"

export const GET_DATA_FOR_MY_PROFILE = "GET_DATA_FOR_MY_PROFILE"
export const GET_DATA_FOR_ALL_PROFILES = "GET_DATA_FOR_ALL_PROFILES"
export const GET_DATA_FOR_SINGLE_USER_ID = "GET_DATA_FOR_SINGLE_USER_ID"
export const GET_SINGLE_USER_EXP = "GET_SINGLE_USER_EXP"
export const GET_DATA_FOR_ALL_POSTS = "GET_DATA_FOR_ALL_POSTS"
export const GET_SINGLE_EXP = "GET_SINGLE_EXP"
export const PUT_REQUEST = 'PUT_REQUEST'
export const SET_LOADING_TRUE =' SET_LOADING_TRUE'
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE'
export const CREATE_POST = 'CREATE_POST'


export const getMyProfileDataActionWithThunk = () => {
  return async (dispatch) => {
    let headers = {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN_MY}`,
      "Content-type": "application/json",
    }
    try {
      // https://striveschool-api.herokuapp.com/api
      let response = await fetch(`${process.env.REACT_APP_URL}/profile/me`, {
        method: "GET",
        headers,
      })

      let myProfileData = await response.json()
      

      dispatch({
        type: GET_DATA_FOR_MY_PROFILE,
        payload: myProfileData,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getAllProfilesActionWithThunk = () => {
  let headers = {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    "Content-type": "application/json",
  }
  return async (dispatch) => {
    try {
      let response = await fetch(`${process.env.REACT_APP_URL}/profile/`, {
        method: "GET",
        headers,
      })

      let allProfilesData = await response.json()
      

      dispatch({
        type: GET_DATA_FOR_ALL_PROFILES,
        payload: allProfilesData,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getProfileBasedOnId = (userId) => {
  let headers = {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    "Content-type": "application/json",
  }
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/profile/${userId}`,
        {
          method: "GET",
          headers,
        }
      )

      let singleUserData = await response.json()
     

      dispatch({
        type: GET_DATA_FOR_SINGLE_USER_ID,
        payload: singleUserData,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export const getUserExpById = (userId) => {
  let headers = {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    "Content-type": "application/json",
  }
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/profile/${userId}/experiences`,
        {
          method: "GET",
          headers,
        }
      )

      let singleUserExperiences = await response.json()
      dispatch({
        type: GET_SINGLE_USER_EXP,
        payload: singleUserExperiences,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getSingletUserExpById = (userId, expId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/profile/${userId}/experiences/${expId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            "Content-type": "application/json",
          },
        }
      )
      let singleExperiences = await response.json()
      dispatch({
        type: GET_SINGLE_EXP,
        payload: singleExperiences,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getAllPostsActionWithThunk = () => {
   const url = process.env.HEROKU_BE_URL
  return async (dispatch) => {
    try {
      let response = await axios.get("https://linkedin-epicode.herokuapp.com/api/posts")

      let data = response.data
      

      dispatch({
        type: GET_DATA_FOR_ALL_POSTS,
        payload: data
      })
      dispatch(resetLoadingAction())
      
    } catch (err) {
      console.log(err)
    }
  }
}

export const createPostActionWithThunk = (body,data) => async (dispatch) => {
  try {
      let response = await axios.post("https://linkedin-epicode.herokuapp.com/api/posts",body)

      let post = await handleFileSend(data, response.data.id)

      console.log(post.data)
      
      dispatch({
        type: CREATE_POST,
        payload: post.data
      })

  } catch (error) {
    
  }
}

export const putRequestAction = (dataSend)=> {

    return {
      type: PUT_REQUEST,
      payload: dataSend
    }
}

export const setLoadingAction = () => {
  return {
    type: SET_LOADING_TRUE,
   
}}

export const resetLoadingAction = () => {
  return {
    type: SET_LOADING_FALSE,
    
  }
}
 const handleFileSend = async(selectedFile,id)=> {
  const data = new FormData()
  data.append("post",selectedFile)
  const response = await axios.post("https://linkedin-epicode.herokuapp.com/api/posts/" + id, data)
  return response
}