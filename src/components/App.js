import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import LoadingBar from 'react-redux-loading';
import QuestionList from './QuestionList';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import QuestionDetail from './QuestionDetail';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {console.log('loading: ', this.props.loading)}
            {
              this.props.loading
                ?
                <Route path='/' exact component={Login} />
                :
                <Fragment>
                  <Nav />
                  <Route path='/unanswer' render={() => <QuestionList unanswer={true} />} />
                  <Route path='/answer' render={() => <QuestionList unanswer={false} />} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/questions/:id' component={QuestionDetail} />
                </Fragment>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStatetoProps({ authedUser}) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStatetoProps)(App);
