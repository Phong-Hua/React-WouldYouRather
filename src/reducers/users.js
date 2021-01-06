import {RECEIVE_USERS} from '../actions/users';
import {ADD_QUESTION, ANSWER_QUESTION} from '../actions/questions';


export default function users(state={}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            const author = action.question.author;
            return {
                ...state,
                [author] : {
                    ...state[author],
                    questions: [...state[author].questions, action.question.id]
                }
            }
        case ANSWER_QUESTION:
            const authedUser = action.authedUser;
            const qid = action.id;
            const answer = action.answer;
            return {
                ...state,
                [authedUser] : {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid] : answer
                    }
                }
            }
        default:
            return state;
    }
}

