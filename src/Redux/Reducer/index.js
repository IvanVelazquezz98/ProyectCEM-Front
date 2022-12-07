const initialState = {

  userStudys: [],
  userInfo: [],
  filteredStudies: []

}




export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        userInfo: action.payload
      }

    case "GET_STUDY":
      return {
        ...state,
        userStudys: action.payload
      }
    case "GET_FILTERED_STUDIES":
      return {
        ...state,
        filteredStudies: action.payload
      }


    default: return state
  }

}