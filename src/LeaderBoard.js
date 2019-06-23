import React,{Component} from 'react';
import { connect } from 'react-redux'
import './App.css';

class LeaderBoard extends Component {

  render(){
    const userArray=Object.keys(this.props.state.users);
    return (
     <div className="leaderboard">
       <header>LeaderBoard</header>
       <div className="usersScore">
           { userArray.map(user=>{
                const userObj=this.props.state.users[user];
                const answeredQ=Object.keys(userObj.answers).length;
                const createdQ=userObj.questions.length;
                return(
                <div key={user} className="userScoreCard">
                    <div className="imageSection">
                      <img src={userObj.avatarURL} alt={userObj.name}/>
                    </div>
                    <div className="infoSection">
                       <h4>{userObj.name}</h4>
                       <div>Answered Questions <span><b>{answeredQ}</b></span></div> 
                       <div>Created Questions <span><b>{createdQ}</b></span></div> 
                    </div>
                    <div className="totalScore">
                      <h4>Score</h4>
                      <div>{answeredQ + createdQ}</div>
                    </div>
                </div>)
            })
            }
       </div>
       
     </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {state};
}
export default connect(mapStateToProps)(LeaderBoard);