import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Question extends Component {

    constructor(props){
        super(props);
        this.handleClicked = this.handleClicked.bind(this)
    }

    handleClicked(e){
        e.preventDefault();
        const {id, history, authedUser} = this.props;
        history.push(`/questions/${id}`);
    }

    render() {
        const {question} = this.props;
        return (
            <div className='info' onClick={this.handleClicked}>
                <h3>Would you rather</h3>
                <ul>
                    <li key='optionOne'>
                        {question.optionOne.text}
                    </li>
                    <li key='optionTwo'>
                        {question.optionTwo.text}
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStatetoProps({authedUser, questions}, {id}) {
    const question = questions[id];
    return {
        question,
        authedUser
    }
}

export default withRouter(connect(mapStatetoProps)(Question));