import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionDetail extends Component {
    render() {
        const {question} = this.props;
        return (
            <div className='question'>
                <img src={avatar} alt={`Avatar of ${name}`}
                    className='avatar' 
                />
                <h3>Would you rather</h3>
                <form>
                    <input type="radio" id="optionOne"/>
                    <label>{question.optionOne.text}</label><br/>
                    <input type="radio" id="optionTwo"/>
                    <label>{question.optionTwo.text}</label><br/>
                </form>
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