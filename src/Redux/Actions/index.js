import axios from 'axios'
const BASE_URL = 'http://localhost:3001'

export function registerUser(payload  ) {
    return async function (dispatch ) {
        try {
          var json = await axios.post(`${BASE_URL}/api/users/register`, payload);
          dispatch({
            type: "GET_USER",
            payload: json.data.user
          })
        } catch (error) {
          console.log(error);
        }
      };
  }

  export function loginUser(payload ){
    return async (dispatch) => {
      const response  = await axios.post(`${BASE_URL}/api/users/register/login` , payload );
      dispatch({
        type: "GET_USER",
        payload: response.data.result.totalUser
      })
    };
  
  }

  export function createSede(payload ){
    return async (dispatch) => {
      const response  = await axios.post(`${BASE_URL}/api/sede/create` , payload );
    };
  
  }


  export function getUser(payload){
    return async (dispatch) => {
      const response  = await axios.get(`${BASE_URL}/api/users/email/` + payload );
      dispatch({
        type: "GET_USER",
        payload: response.data.user
      })
    };
  }