import React, {Component} from 'react';
import Question from './Question';
import QuestionDetail from './QuestionDetail';
import {connect} from 'react-redux';

class QuestionList extends Component {

    // render() {
    //     const {ids, unanswer} = this.props;
    //     return(
    //         <div className='question-list'>
    //             {ids.map((id) => <QuestionDetail key={id} id={id} unanswer={unanswer}/>)}
    //         </div>
    //     )
    // }

    render() {
        const {ids} = this.props;
        return(
            <div className='question-list'>
                {ids.map((id) => <Question key={id} id={id}/>)}
            </div>
        )
    }
}

// function mapStatetoProps({authedUser, users, questions}, props) {
    
//     console.log('Props: ', JSON.stringify(props))
//     return {
//         ids: []
//     }
//     // // IDs of questions the authedUser answer.
//     // const answeredQuestions = users[authedUser].answers;
//     // console.log('User: ', authedUser);
//     // console.log('answer: ', answeredQuestions);
//     // const allIds = Object.keys(questions);
//     // let returnValue = [];
//     // if (unanswer)
//     //     returnValue = allIds.filter((id) => !(id in answeredQuestions));
//     // else
//     //     returnValue = allIds.filter((id) => id in answeredQuestions);

//     // return {
//     //     ids: returnValue.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
//     //     unanswer
//     // }
// }

function mapStatetoProps({authedUser, users, questions}, {unanswer}) {
    
    console.log('Props: ', JSON.stringify(this.props))
    // IDs of questions the authedUser answer.
    const answeredQuestions = users[authedUser].answers;
    console.log('User: ', authedUser);
    console.log('answer: ', answeredQuestions);
    const allIds = Object.keys(questions);
    let returnValue = [];
    if (unanswer)
        returnValue = allIds.filter((id) => !(id in answeredQuestions));
    else
        returnValue = allIds.filter((id) => id in answeredQuestions);

    return {
        ids: returnValue.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    }
}

export default connect(mapStatetoProps)(QuestionList);
