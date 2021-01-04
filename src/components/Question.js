import React, {Component} from 'react';
import {connect} from 'react-redux';

class Question extends Component {
    render() {
        const {question} = this.props;
        return (
            <div className='question'>
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

function mapStatetoProps({questions}, {id}) {
    const question = questions[id];
    return {
        question,
    }
}

export default connect(mapStatetoProps)(Question);