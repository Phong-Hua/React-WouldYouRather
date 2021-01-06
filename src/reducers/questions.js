import {RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION} from '../actions/questions';

export default function questions(state={}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id] : action.question
            }
        case ANSWER_QUESTION:
            const qid = action.id;
            const answer = action.answer;   // either optionOne or optionTwo
            const authedUser = action.authedUser;
            return {
                ...state,
                [qid] : {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: [...state[qid][answer].votes, authedUser]
                    }
                }
            }
        default:
            return state;
    }
}