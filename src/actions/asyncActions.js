import { _getQuestions,_getUsers,_saveQuestion,_saveQuestionAnswer} from '../data.js';
import { receiveQuestions,saveQuestion} from './questionsAction.js';
import { receiveUsers} from './usersAction.js';

export function loadQuestions(){
    return (dispatch)=>{
        return _getQuestions().then((questions)=>{
            dispatch(receiveQuestions(questions));
        })
    }
}

export function loadUsers(){
    return (dispatch)=>{
        return _getUsers().then((users)=>{
            dispatch(receiveUsers(users));
        })
    }
}

export function saveNewQuestion(questionObj){
    return (dispatch)=>{
    //dispatch(showLoading());
        return _saveQuestion(questionObj).then((question)=>{
            dispatch(saveQuestion(question));
            dispatch(loadUsers());
        })
    }
}

export function saveQuestionAnswer(answerObj){
    return (dispatch)=>{
    //dispatch(showLoading());
        return _saveQuestionAnswer(answerObj).then((response)=>{
            console.log(response);
            dispatch(loadQuestions());
            dispatch(loadUsers());
        })
    }
}