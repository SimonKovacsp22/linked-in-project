export const GET_SINGLE_USER_EXP = 'GET_SINGLE_USER_EXP';

export const getUserExpById = (userId)=>{
    let headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE5YzNkNzAxNjBiNTAwMTU1YmI0YzQiLCJpYXQiOjE2NTUyOTQyMTAsImV4cCI6MTY1NjUwMzgxMH0.ZqivIPQ8TjJRvVDjSA8kmF3IFZe4mzsLyqZlp-EIaCM",
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
              console.log(singleUserExperiences)
      
              dispatch( {
                type: GET_SINGLE_USER_EXP,
                payload: singleUserExperiences
            })
                    
            } catch (err) {
              console.log(err);
            }
          }
}