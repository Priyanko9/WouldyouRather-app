import {RECEIVE_QUESTIONS} from './actionTypes';
import {SAVE_QUESTION} from './actionTypes';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function saveQuestion (question) {
    return {
      type: SAVE_QUESTION,
      question
    }
}
