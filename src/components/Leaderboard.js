import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from './User';

class Leaderboard extends Component {
    render() {
        const {ids} = this.props;
        return (
            <div className='center'>
                {ids.map((id) => <User key={id} id={id}/>)}
            </div>
        )
    }
}

function mapStatetoProps({users}) {

    const sumQuestionAskedAndAnswered = (id) => {
        return Object.keys(users[id].answers).length + users[id].questions.length;
    }
    return {
        ids: Object.keys(users).sort((a,b) => sumQuestionAskedAndAnswered(b) - sumQuestionAskedAndAnswered(a))
    }
}

export default connect(mapStatetoProps)(Leaderboard);