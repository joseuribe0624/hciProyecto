import { SET_AUTHENTICATION, SET_USER, SET_FETCHING } from './../actions/auth'


let initialState = {
  isAuthenticated: false,
  user: {},
  isFetching: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {...state, isAuthenticated: action.payload,}
    case SET_USER:
      return {...state, user: action.payload}
    case SET_FETCHING:
      return {...state, isFetching: action.payload}
    default:
      return state
  }
}
