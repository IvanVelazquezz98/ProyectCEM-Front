const initialState = {
    
    userStudys : [],
    userInfo: []
  }
  
  
  
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_USER":
        return {
          ...state,
          userInfo: action.payload
        }
  
  
      default: return state
    }
  
  }