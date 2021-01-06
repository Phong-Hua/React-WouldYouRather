import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleAddQuestion} from '../actions/questions';
import {withRouter} from 'react-router-dom';

class NewQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optionOne: '',
            optionTwo: '',

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleNewQuestion = this.handleNewQuestion.bind(this)
    }

    handleChange(e, option){
        // Create temp object has option and merge with current state
        const input = e.target.value;
        var temp = {};
        temp[option] = input;

        this.setState((currentState) => ({
            ...currentState,
            ...temp
        }))
    }

    handleNewQuestion(e) {
        e.preventDefault();

        const {authedUser, dispatch} = this.props;
        dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo, authedUser));

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
        }))

        // Bring back to home
        this.props.history.push('/unanswer');
    }

    render() {

        return (
            <div className='center'>
                <div className='info'>
                    <h3>Would you rather</h3>
                    <form onSubmit={this.handleNewQuestion}>
                        <input 
                            className='option-input' 
                            placeholder='Option one' 
                            value={this.state.optionOne}
                            onChange={(e) => this.handleChange(e, 'optionOne')}
                        />
                        <br/>
                        <input 
                            className='option-input' 
                            placeholder='Option two'
                            value={this.state.optionTwo}
                            onChange={(e) => this.handleChange(e, 'optionTwo')}
                        />
                        <br />
                        <button 
                            className='btn' 
                            type='submit'
                            disabled={this.state.optionOne.trim() === '' || this.state.optionTwo.trim() === ''}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        )
    }
}

function mapStatetoProps({authedUser}){
    return {authedUser}
}

// export default connect(mapStatetoProps)(NewQuestion);
export default withRouter(connect(mapStatetoProps)(NewQuestion));