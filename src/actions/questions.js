export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

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