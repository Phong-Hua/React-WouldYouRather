import {_getUsers as getUsers} from '../utils/_DATA';
import {showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_USERS = 'RECEIVE_USERS';

/**
 * Action creator
 * @param {} users 
 */
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

/**
 * Asynchronous action creator
 */
export function handleReceiveUsers() {
    return (dispatch) => {
        dispatch(showLoading());
        return getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(hideLoading());
            })
    }
}