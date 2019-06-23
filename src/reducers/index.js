import { combineReducers } from 'redux'
import users from './users.js'
import questions from './questions.js'
import { loadingBarReducer } from 'react-redux-loading'
import signedIn from './signedIn.js'

export default combineReducers({
  users,
  questions,
  loadingBar: loadingBarReducer,
  signedIn
})