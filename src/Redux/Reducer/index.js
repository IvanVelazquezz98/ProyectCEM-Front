const initialState = {
    detailUser: []
  }
  
  
  
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_USER":
        return {
          ...state,
          detailUser: action.payload
        }
  
  
      default: return state
    }
  
  }