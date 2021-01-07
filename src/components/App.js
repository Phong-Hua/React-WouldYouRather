import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Logout from './Logout';
import QuestionList from './QuestionList';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import QuestionDetail from './QuestionDetail';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  redirectToLogin =(from) => {
    return (
      <Redirect to={{pathname: '/', state: {from, }, }} />
    )
  }

  render() {
    const loading = this.props.loading;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>

            {
              loading ? null : <Nav/>
            }
            
            <Route path='/' exact component={Login} />
            <Route path='/unanswer' exact render={(props) => (loading ? this.redirectToLogin(props.location.pathname) : <QuestionList unanswer={true} />)} />
            <Route path='/answer' exact render={(props) => (loading ? this.redirectToLogin(props.location.pathname) : <QuestionList unanswer={false} />)} />
            <Route path='/add' exact render={(props) => (loading ? this.redirectToLogin(props.location.pathname) : <NewQuestion />)}  />
            <Route path='/leaderboard' exact render={(props) => (loading ? this.redirectToLogin(props.location.pathname) : <Leaderboard />)} />
            <Route path='/questions/:id' exact render={(props) => (loading ? this.redirectToLogin(props.location.pathname) : <QuestionDetail id={props.match.params.id} />)} />
            <Route path='/logout' component={Logout} />
          </div>
        </Fragment>
      </Router>
    )
  }
}


function mapStatetoProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStatetoProps)(App);
