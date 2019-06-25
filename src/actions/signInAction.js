import {LOGIN_STATE} from './actionTypes';
import {LOGOUT_STATE} from './actionTypes';

export function LOGIN(user) {
  return {
    type: LOGIN_STATE,
    user,
    signedIn:true
  }
}
export function LOGOUT(user) {
    return {
      type: LOGOUT_STATE,
      user,
      signedIn:false
    }
  }