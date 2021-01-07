import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';
import {Redirect} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            toNextPage: false,
        }
    }

    handleLogin(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const id = this.select.value;
        if (id)
        {
            dispatch(setAuthedUser(id));
            this.setState(() => ({
                toNextPage: true,
            }))
        }
    }

    render() {

        const {ids, nextPage} = this.props;

        if(this.state.toNextPage)
        {
            return <Redirect to={nextPage} />
        }    
        
        return (
            <div className='center'>
                <form onSubmit={this.handleLogin}>
                    <h3>Login as: </h3>
                    <select className='id' ref={(select) => this.select = select}>
                        {ids.map((id) => (<option key={id}>{id}</option>))}
                    </select>
                    <br/>
                    <button className='btn' type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

function mapStatetoProps({authedUser, users}, props) {
    const nextPage = (props.location.state) ? props.location.state.from : '/unanswer';
    return {
        authedUser,
        ids : Object.keys(users).sort((a,b) => a-b),
        nextPage,
    }
}

export default connect(mapStatetoProps)(Login);