import { LOGIN_STATE,LOGOUT_STATE } from '../actions/signInAction.js' 

export default function signedIn (state = {signedIn:false}, action) {
  switch(action.type) {
    case LOGOUT_STATE :
      return {
        ...state,
        signedIn:action.signedIn,
        user:action.user
      }
    case LOGIN_STATE :
      return {
        ...state,
        signedIn:action.signedIn,
        user:action.user
      }
    default :
      return state
  }
}