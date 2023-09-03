# Would-you-rather-react-redux-app 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a questioning app where a user can sign and ask any random question with two options.
The user can also see what is his/her score and where he stands in the leaderboard.He can choose between answered and unanswered questions.For answered question ,he/she can directly see the poll result and for unanswered question the user has to first answer the question and then he/she will be able to view the poll result.
The app is live at https://wouldyourather.onrender.com/


### `Install`

Install all the required node modules using npm install

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### components
1.AppContainer-This is the component which hold all the other components leaderboard,newquestion,home.

2.Home-This component shows all the unanswered and answered questions.For Unanswered question it will take you to the question and after one answered it will go directly to the poll result.For answered questions it will directly take to the poll result.

3.LeaderBoard-This components will show all the users and their respective scores(questions asked and questions answered)

4.NewQuestion-This component will enable the user to ask a new question.

5.QuestionNPoll-This component will contain a particular question and the poll results corresponds to that question
6.SignIn-This component will help the user to sign in.

### Redux Code
All the actions,reducer and middleware code are there in corresponding folders.

### API calls

data.js contains all the api calls


