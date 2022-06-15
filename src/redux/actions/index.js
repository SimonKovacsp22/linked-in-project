export const GET_DATA_FOR_MY_PROFILE ='GET_DATA_FOR_MY_PROFILE'

export const getMyProfileDataActionWithThunk =() => {
    let headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE5YzNkNzAxNjBiNTAwMTU1YmI0YzQiLCJpYXQiOjE2NTUyOTQyMTAsImV4cCI6MTY1NjUwMzgxMH0.ZqivIPQ8TjJRvVDjSA8kmF3IFZe4mzsLyqZlp-EIaCM",
        "Content-type": "application/json",
    }
    return async (dispatch) => {
        
        
            try {
              let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me',
                {
                  method: "GET",
                  headers,
                }
              );
                
              let myProfileData = await response.json();
              console.log(myProfileData)
      
              dispatch({
                type: GET_DATA_FOR_MY_PROFILE,
                payload: myProfileData
            })
                    
            } catch (err) {
              console.log(err);
            }
          }
       
    }