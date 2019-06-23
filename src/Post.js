import React,{Component} from 'react';
import { connect } from 'react-redux'
import './App.css';
import {withRouter} from 'react-router-dom';

class Post extends Component {

  render(){
    const question=this.props.state.questions[this.props.question];
    const user=this.props.state.users[question.author];
    const flag=this.props.flag;
    return (
     <div>
       <div className="postSection">
        <header>{question.author} asks</header>
        <div className="postBody">
            <div className="userImage">
                <img src={user.avatarURL} alt={user.name}/>
            </div>
            <div className="questionSection">
                <h3>Would You Rather</h3>
                  ....{question.optionOne.text}....
                <button onClick={()=>{this.props.history.push({
                  pathname:`/questionAsked`,
                  state:{question,flag}
              })}} value="View Poll">View Poll</button>     
            </div>
        </div>
        </div>
     </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {state};
}
export default withRouter(connect(mapStateToProps)(Post));
