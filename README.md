# Would You Rather Project

This project is completed as an requirement to pass the final assessment for Udacity's React & Redux course. It is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules. 

The `_DATA.js` file represents a fake database and methods that let you access the data. 

## Features

* First, users needs to login, using one of the user profiles available.
* After logged in, users are brought to home page with a number of option available.
  * Unanswered poll: This includes all question has not been answered by the logged in user yet. By clicking on one of these question, users are prompted to select [option A] or [option B].
  * Answered poll: This page has questions that were answered by the logged in user.
  * New poll: Users are provided a form to make their own poll. Upon submitting a question, the user is carried to Unanswered poll.
  * Leaderboard: This provides information about all users (their name, avatar, number of questions they asked as well as number of answered questions).
  * Logout: User logout of the app and is brought to login page.
* All options are also available by their URL:
  * Login: '/'
  * Unanswered poll: '/unanswer'
  * Specific question: '/questions/:id'
  * Answered poll: '/answer'
  * New poll: '/add'
  * Leaderboard: '/leaderboard'
  * Logout: '/logout'

## TL;DR

To run the project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src 
    ├── actions 
    │    ├── authedUser.js 
    │    ├── question.js 
    │    ├── shared.js 
    │    └── users.js 
    ├── components 
    │   ├── App.js 
    │   ├── Leaderboard.js 
    │   ├── Login.js 
    │   ├── Logout.js 
    │   ├── Nav.js
    │   ├── NewQuestion.js
    │   ├── Question.js
    │   ├── QuestionDetail.js
    │   ├── QuestionList.js
    │   ├── Test.js      
    │   └── User.js 
    ├── middleware
    │   ├── index.js 
    │   └── logger.js 
    ├── reducers
    │    ├── authedUser.js 
    │    ├── index.js 
    │    ├── question.js 
    │    └── users.js 
    ├── utils
    │    ├── _DATA.js    
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
