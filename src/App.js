import React,{Component,Fragment} from 'react';
import { connect } from 'react-redux'
import './App.css';
import LoadingBar from 'react-redux-loading';
import { loadQuestions,loadUsers} from './actions/asyncActions.js';
import SignIn from './SignIn';
import AppContainer from './AppContainer';
import {LOGOUT} from './actions/signInAction';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(loadQuestions());
    this.props.dispatch(loadUsers());
  }
  logout(){
    const selectedUser=this.props.state.signedIn.user;
    this.props.dispatch(LOGOUT(selectedUser));
    window.history.pushState({},'index','/');
  }
  
  render(){
    return (
        <Fragment>
          <LoadingBar/>
          {!this.props.state.signedIn.signedIn && <SignIn/>}
          {this.props.state.signedIn.signedIn && <AppContainer/>}
          {this.props.state.signedIn.signedIn && <div className="logout" onClick={()=>this.logout()}>logout</div>}
        </Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
  return {state};
}
export default connect(mapStateToProps)(App);
