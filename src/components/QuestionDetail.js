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

        const optionOneCount = question.optionOne.votes.length;
        const optionTwoCount = question.optionTwo.votes.length;
        const optionOnePercentage = (optionOneCount * 100 / (optionOneCount + optionTwoCount)).toFixed(0);
        const optionTwoPercentage = 100 - optionOnePercentage;
        return {
            optionOneText: question.optionOne.text,
            optionTwoText: question.optionTwo.text,
            optionOnePercentage,
            optionTwoPercentage,
            optionOneVoted: question.optionOne.votes.includes(authedUser),
            optionTwoVoted: question.optionTwo.votes.includes(authedUser),
        }
    }

    render() {

        const {authedUser, question, authorAvatar, authorName} = this.props;
        if (!question)
            return (<div>
                The Question not found
            </div>)
        
        const { optionOneText, optionTwoText, optionOnePercentage, optionTwoPercentage, optionOneVoted, optionTwoVoted } = this.extractQuestionDetails(question, authedUser);
        const alreadyAnswer = optionOneVoted || optionTwoVoted;
        return (

            <div className='info'>
                <img src={authorAvatar} alt={`Avatar of ${authorName}`}
                    className='avatar' 
                />
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
                    {optionOnePercentage}% vote(s)
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
                    {optionTwoPercentage}% vote(s)
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



function mapStatetoProps({ authedUser, questions, users }, {id}) {
    const question = questions[id];

    const user = users[question.author];
    const authorAvatar = user.avatarURL;
    const authorName = user.name;
    return {
        id,
        question,
        authedUser,
        authorAvatar,
        authorName
    }
}

export default connect(mapStatetoProps)(QuestionDetail);