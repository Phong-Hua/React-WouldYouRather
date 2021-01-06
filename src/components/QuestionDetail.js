import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';

class QuestionDetail extends Component {

    constructor(props) {
        super(props);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            answer: '',
        }
    }

    submitAnswer = (e) => {
        e.preventDefault();
        const { authedUser, dispatch, id } = this.props;
        dispatch(handleAnswerQuestion(authedUser, id, this.state.answer));
    }

    handleChange = (e) => {

        this.setState(() => ({
            answer: e.target.value
        }))
    }

    extractQuestionDetails = (question, authedUser) => {
        return {
            optionOneText: question.optionOne.text,
            optionTwoText: question.optionTwo.text,
            optionOneCount: question.optionOne.votes.length,
            optionTwoCount: question.optionTwo.votes.length,
            optionOneVoted: question.optionOne.votes.includes(authedUser),
            optionTwoVoted: question.optionTwo.votes.includes(authedUser),
        }
    }

    render() {

        const {id, authedUser, question} = this.props;
        if (!question)
            return (<div>
                The Question not found
            </div>)
        
        const { optionOneText, optionTwoText, optionOneCount, optionTwoCount, optionOneVoted, optionTwoVoted } = this.extractQuestionDetails(question, authedUser);
        const alreadyAnswer = optionOneVoted || optionTwoVoted;
        return (

            <div className='info'>
                <h3>Would you rather</h3>
                <input
                    type='radio'
                    id='optionOne'
                    name='option'
                    value='optionOne'
                    defaultChecked={optionOneVoted}
                    disabled={alreadyAnswer}
                    onChange={this.handleChange}
                />
                <label>
                    {optionOneText}
                </label> 
                <br />
                <label>
                    {optionOneCount} vote(s)
                </label> 
                <br />
                <input
                    type="radio"
                    id="optionTwo"
                    name='option'
                    value='optionTwo'
                    defaultChecked={optionTwoVoted}
                    disabled={alreadyAnswer}
                    onChange={this.handleChange}
                />
                <label>
                    {optionTwoText}
                </label> 
                <br />
                <label>
                    {optionTwoCount} vote(s)
                </label> 
                <br />
                <button
                    disabled={alreadyAnswer}
                    onClick={this.submitAnswer}
                >
                    Submit
                    </button>
            </div>
        )
    }
}



function mapStatetoProps({ authedUser, questions }, props) {

    const { id } = props.match.params;
    const question = questions[id];
    return {
        id,
        question,
        authedUser,
        // optionOneText: question.optionOne.text,
        // optionTwoText: question.optionTwo.text,
        // optionOneCount: question.optionOne.votes.length,
        // optionTwoCount: question.optionTwo.votes.length,
        // optionOneVoted: question.optionOne.votes.includes(authedUser),
        // optionTwoVoted: question.optionTwo.votes.includes(authedUser),
    }
}

export default connect(mapStatetoProps)(QuestionDetail);