/** @format */

export const GET_DATA_FOR_MY_PROFILE = "GET_DATA_FOR_MY_PROFILE"
export const GET_DATA_FOR_ALL_PROFILES = "GET_DATA_FOR_ALL_PROFILES"
export const GET_DATA_FOR_SINGLE_USER_ID = "GET_DATA_FOR_SINGLE_USER_ID"
export const GET_SINGLE_USER_EXP = "GET_SINGLE_USER_EXP"
export const GET_DATA_FOR_ALL_POSTS = "GET_DATA_FOR_ALL_POSTS"

export const getMyProfileDataActionWithThunk = () => {
  return async (dispatch) => {
    let headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFhZGM5Zjk5OTlmZTAwMTVlNjZlMjIiLCJpYXQiOjE2NTUzNjQ3NjgsImV4cCI6MTY1NjU3NDM2OH0.JXJ65n1oTxFcYw90c-b5HB1OJGtIJ9L_-BZcySGIct4",
      "Content-type": "application/json",
    }
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
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
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFhZGM5Zjk5OTlmZTAwMTVlNjZlMjIiLCJpYXQiOjE2NTUzNjQ3NjgsImV4cCI6MTY1NjU3NDM2OH0.JXJ65n1oTxFcYw90c-b5HB1OJGtIJ9L_-BZcySGIct4",
    "Content-type": "application/json",
  }
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers,
        }
      )

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
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFhZGM5Zjk5OTlmZTAwMTVlNjZlMjIiLCJpYXQiOjE2NTUzNjQ3NjgsImV4cCI6MTY1NjU3NDM2OH0.JXJ65n1oTxFcYw90c-b5HB1OJGtIJ9L_-BZcySGIct4",
    "Content-type": "application/json",
  }
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + userId,
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
  let headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFhZGM5Zjk5OTlmZTAwMTVlNjZlMjIiLCJpYXQiOjE2NTUzNjQ3NjgsImV4cCI6MTY1NjU3NDM2OH0.JXJ65n1oTxFcYw90c-b5HB1OJGtIJ9L_-BZcySGIct4",
    "Content-type": "application/json",
  }
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          userId +
          "/experiences",
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

export const getAllPostsActionWithThunk = () => {
  let headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFhZGM5Zjk5OTlmZTAwMTVlNjZlMjIiLCJpYXQiOjE2NTUzNjQ3NjgsImV4cCI6MTY1NjU3NDM2OH0.JXJ65n1oTxFcYw90c-b5HB1OJGtIJ9L_-BZcySGIct4",
    "Content-type": "application/json",
  }
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers,
        }
      )

      let allPostsData = await response.json()
      console.log(allPostsData)

      dispatch({
        type: GET_DATA_FOR_ALL_POSTS,
        payload: allPostsData,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
