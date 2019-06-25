import React,{Component} from 'react';
import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionNPoll from './QuestionNPoll'
import NotFound from './NotFoundComponent'

class AppContainer extends Component {

  render(){
    return (
     <div className="appContainer">
       <Router>
          <Nav/>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/newquestion' component={NewQuestion} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/questionAsked' component={QuestionNPoll} />
            <Route  component={NotFound} />
          </Switch>
       </Router> 
     </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {state};
}
export default connect(mapStateToProps)(AppContainer);
