import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';
import {withRouter} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        const {dispatch, previousPage, history} = this.props;
        const id = this.select.value;
        dispatch(setAuthedUser(id));

        // if no previous page
        if (!previousPage)
            history.push('/unanswer');
        // bring to home page
        // this.props.history.push('/unanswer');
    }

    render() {
        const {authedUser, ids} = this.props;
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

function mapStatetoProps({authedUser, users}, {previousPage}) {
    console.group('At Login');
    console.log('previousPage: ', previousPage);
    console.log('authed User: ', authedUser);
    console.groupEnd();
    return {
        authedUser,
        ids : Object.keys(users).sort((a,b) => a-b),
        previousPage
    }
}

export default withRouter(connect(mapStatetoProps)(Login));