export const LOGIN_STATE = 'LOGIN'
export const LOGOUT_STATE = 'LOGOUT'

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