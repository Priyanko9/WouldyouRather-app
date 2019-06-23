import { RECEIVE_QUESTIONS,SAVE_QUESTION } from '../actions/questionsAction.js'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION :
        state[action.question.id]=action.question;
        return {
          ...state
        }  
    default :
      return state
  }
}