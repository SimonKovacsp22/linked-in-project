/** @format */

export const GET_DATA_FOR_MY_PROFILE = "GET_DATA_FOR_MY_PROFILE"
export const GET_DATA_FOR_ALL_PROFILES = "GET_DATA_FOR_ALL_PROFILES"
export const GET_DATA_FOR_SINGLE_USER_ID = "GET_DATA_FOR_SINGLE_USER_ID"
export const GET_SINGLE_USER_EXP = "GET_SINGLE_USER_EXP"
export const GET_DATA_FOR_ALL_POSTS = "GET_DATA_FOR_ALL_POSTS"
export const GET_SINGLE_EXP = "GET_SINGLE_EXP"
export const PUT_REQUEST = "PUT_REQUEST"
export const SET_LOADING_TRUE = " SET_LOADING_TRUE"
export const SET_LOADING_FALSE = "SET_LOADING_FALSE"

export const getMyProfileDataActionWithThunk = () => {
  return async (dispatch) => {
    let headers = {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN_MY}`,
      "Content-type": "application/json",
    }
    try {
      // https://striveschool-api.herokuapp.com/api
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          method: "GET",
          headers,
        }
      )

      let myProfileData = await response.json()
      console.log(myProfileData)

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
      let response = await fetch(`${process.env.REACT_APP_URL}/users`, {
        method: "GET",
        headers,
      })

      let allProfilesData = await response.json()
      console.log(allProfilesData)

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
        `${process.env.REACT_APP_URL}/users/${userId}`,
        {
          method: "GET",
          headers,
        }
      )

      let singleUserData = await response.json()
      console.log(singleUserData)

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
  // let headers = {
  //   Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  //   "Content-type": "application/json",
  // }
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/users/${userId}/experiences`,
        {
          method: "GET",
          //headers,
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
        `${process.env.REACT_APP_URL}/users/${userId}/experiences/${expId}`,
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
  let headers = {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    "Content-type": "application/json",
  }
  return async (dispatch) => {
    try {
      let response = await fetch(`${process.env.REACT_APP_URL}/posts/`, {
        method: "GET",
        headers,
      })

      let allPostsData = await response.json()

      dispatch({
        type: GET_DATA_FOR_ALL_POSTS,
        payload: allPostsData,
      })
      dispatch(resetLoadingAction())
    } catch (err) {
      console.log(err)
    }
  }
}

export const putRequestAction = (dataSend) => {
  return {
    type: PUT_REQUEST,
    payload: dataSend,
  }
}

export const setLoadingAction = () => {
  return {
    type: SET_LOADING_TRUE,
  }
}

export const resetLoadingAction = () => {
  return {
    type: SET_LOADING_FALSE,
  }
}
