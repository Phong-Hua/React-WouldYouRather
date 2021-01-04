import React, {Component} from 'react';
import Question from './Question';
import {connect} from 'react-redux';

class QuestionList extends Component {

    render() {
        const {ids} = this.props;
        return(
            <div className='question-list'>
                {ids.map((id) => <Question key={id} id={id}/>)}
            </div>
        )
    }
}

function mapStatetoProps({authedUser, users, questions}, {unanswer}) {
    
    // IDs of questions the authedUser answer.
    const answeredQuestions = users[authedUser].answers;
    const allIds = Object.keys(questions);
    let returnValue = [];
    if (unanswer)
        returnValue = allIds.filter((id) => !(id in answeredQuestions));
    else
        returnValue = allIds.filter((id) => id in answeredQuestions);

    return {
        ids: returnValue.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStatetoProps)(QuestionList);
