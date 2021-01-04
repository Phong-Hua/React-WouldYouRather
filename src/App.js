import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleReceiveUsers } from './actions/users';
import { handleLogin, handleInitialData } from './actions/shared';
import Login from './components/Login';
import LoadingBar from 'react-redux-loading';
import QuestionList from './components/QuestionList';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setAuthedUser } from './actions/authedUser';

class App extends Component {

  // componentDidMount() {
  //   this.props.dispatch(handleReceiveUsers());
  //   const id = 'tylermcginnis';
  //   this.props.dispatch(handleLogin(id));
  // }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
    // const id = 'tylermcginnis';
    // this.props.dispatch(setAuthedUser(id));
  }

  render() {
    return (

      // <div>
      //   <h3>Unanswer</h3>
      //   <QuestionList unanswer={true} />
      //   <h3>Answer</h3>
      //   <QuestionList unanswer={false} />
      // </div>

      // <div>
      //   {this.props.loading === true
      //     ? null
      //     :
      //     <div>
      //       <h3>Unanswer</h3>
      //       <QuestionList unanswer={true} />
      //       <h3>Answer</h3>
      //       <QuestionList unanswer={false} />
      //     </div>}
      // </div>



      <Router>
        <Fragment>

          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? <Route path='/' exact component={Login} />
              : <Fragment>
                  <Nav />
                  <Route path='/unanswer' render={() => <QuestionList unanswer={true}/>}/>
                  <Route path='/answer' render={() => <QuestionList unanswer={false}/>}/>
              </Fragment>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStatetoProps({ authedUser, users, questions }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStatetoProps)(App);
