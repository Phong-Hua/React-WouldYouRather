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
