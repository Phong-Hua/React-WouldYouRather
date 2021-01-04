import {setAuthedUser} from './authedUser';
import {receiveQuestions} from './questions';
import {_getQuestions as getQuestions} from '../utils/_DATA';
import {_getUsers as getUsers} from '../utils/_DATA';
import { receiveUsers } from './users';

/**
 * Asynchronous action creator
 * @param {*} id 
 */
export function handleLogin(id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id));
        return getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions));
            })
    }
}

// const ID = 'tylermcginnis';
const ID = 'sarahedo';
export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([getQuestions(), getUsers()])
        .then(([questions, users]) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(ID));
        })
    }
}