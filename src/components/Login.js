import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleLogin} from '../actions/shared';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        const id = this.select.value;
        this.props.dispatch(handleLogin(id));
    }

    render() {
        const {ids} = this.props;
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

function mapStatetoProps({users}) {
    return {
        ids : Object.keys(users).sort((a,b) => a-b),
    }
}

export default connect(mapStatetoProps)(Login);