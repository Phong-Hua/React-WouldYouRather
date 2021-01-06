import {showLoading, hideLoading} from 'react-redux-loading';
import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

/**
 * Action creator
 * @param {*} questions 
 */
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

/**
 * Action creator.
 * @param {*} question 
 */
function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

function answerQuestion(authedUser, id, answer) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        id,
        answer,
    }
}

/**
 * Asynchronous action creator
 * @param {*} optionOneText 
 * @param {*} optionTwoText 
 * @param {*} author 
 */
export function handleAddQuestion(optionOneText, optionTwoText, author) {
    return (dispatch) => {
        dispatch(showLoading());
        const question = {optionOneText, optionTwoText, author};

        return _saveQuestion(question)
        .then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
            dispatch(hideLoading());
        })
        .catch((e) => {
            console.warn('Error in handleAddQuestion: ', e);
            alert('There was an error when add a question. Try again');
            dispatch(hideLoading());
        })
    }
}

export function handleAnswerQuestion(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestionAnswer({authedUser, qid, answer})
        .then(() => {
            dispatch(answerQuestion(authedUser, qid, answer));
            dispatch(hideLoading());
        })
        .catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e);
            alert('There was an error when add a question. Try again');
            dispatch(hideLoading());
        })
    }
}