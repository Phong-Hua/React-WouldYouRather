import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';


class Logout extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toLogin: false
        }
    }

    componentDidMount() {
        this.props.dispatch(setAuthedUser(null));
        this.setState(() => ({
            toLogin: true
        }))
    }

    render() {
        if (this.state.toLogin)
            return <Redirect to='/' />
        return (
            <div>Logout</div>
        )
    }
}


export default connect()(Logout)