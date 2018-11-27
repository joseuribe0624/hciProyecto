export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'
export const SET_USER = 'SET_USER'
export const SET_FETCHING = 'SET_FETCHING'

export const setAuthentication = (payload) => {
  return {
    type: SET_AUTHENTICATION,
    payload: payload
  }
}

export const setUser = (user) =>{
  return {
    type: SET_USER,
    payload: user
  }
}

export const setFetching = (bool) => {
  return {
    type: SET_FETCHING,
    payload: bool
  }
}
