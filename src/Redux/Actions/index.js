export const GET_SINGLE_USER_EXP = 'GET_SINGLE_USER_EXP';

export const getUserExpById = (userId)=>{
    let headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFjMzMwM2E2ZmE5ZTAwMTVlYjE3NTUiLCJpYXQiOjE2NTU0NTI0MjQsImV4cCI6MTY1NjY2MjAyNH0.SLChBTo_mTBL1GH8dYRNmbUiQ32D2Eb9Ly2slWaOsfE",
        "Content-type": "application/json",
    }
    return async (dispatch) => {
        
        
            try {
              let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/'+ userId + '/experiences',
                {
                  method: "GET",
                  headers,
                }
              );
                
              let singleUserExperiences = await response.json();
              dispatch( {
                type: GET_SINGLE_USER_EXP,
                payload: singleUserExperiences
            })
                    
            } catch (err) {
              console.log(err);
            }
          }
}