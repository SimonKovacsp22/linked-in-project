/** @format */

export const GET_DATA_FOR_MY_PROFILE = "GET_DATA_FOR_MY_PROFILE"
export const GET_DATA_FOR_ALL_PROFILES = "GET_DATA_FOR_ALL_PROFILES"
export const GET_DATA_FOR_SINGLE_USER_ID = "GET_DATA_FOR_SINGLE_USER_ID"

export const getMyProfileDataActionWithThunk = () => {
  let headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE5YzNkNzAxNjBiNTAwMTU1YmI0YzQiLCJpYXQiOjE2NTUyOTQyMTAsImV4cCI6MTY1NjUwMzgxMH0.ZqivIPQ8TjJRvVDjSA8kmF3IFZe4mzsLyqZlp-EIaCM",
    "Content-type": "application/json",
  }
  return async (dispatch) => {
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
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE5YzNkNzAxNjBiNTAwMTU1YmI0YzQiLCJpYXQiOjE2NTUyOTQyMTAsImV4cCI6MTY1NjUwMzgxMH0.ZqivIPQ8TjJRvVDjSA8kmF3IFZe4mzsLyqZlp-EIaCM",
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
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE5YzNkNzAxNjBiNTAwMTU1YmI0YzQiLCJpYXQiOjE2NTUyOTQyMTAsImV4cCI6MTY1NjUwMzgxMH0.ZqivIPQ8TjJRvVDjSA8kmF3IFZe4mzsLyqZlp-EIaCM",
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
