import React,{Component} from 'react';
import { connect } from 'react-redux'
import './App.css';
import { saveQuestionAnswer} from './actions/asyncActions.js';

class QuestionNPoll extends Component {

  constructor(props){
    super(props);
    const flag=this.props.location.state.flag;
    this.state={
      showQuestion:flag==="unansweredQ"?true:false,
      showPoll:flag==="answeredQ"?true:false,
      option:"",
      load:false
    };
  }
  componentDidMount(){
    this.paintAnsweredPercentage();
  }
  paintAnsweredPercentage(){
    const votePercent=[...document.getElementsByClassName("votePercent")];
    votePercent.length > 0 && votePercent.forEach((ele,i)=>{
        let value=ele.textContent;
        let answered=document.getElementsByClassName("answered")[i];
        if(value==="0%"){
          answered.style["margin-left"]="20px";
        }
        answered.style.width=value;
    })
    this.setState({load:true});
  }
  submitAnswer(){
    const answer=document.querySelector('input[name="option"]:checked').value;  
    const qid=this.props.location.state.question.id;
    const authedUser=this.props.state.signedIn.user;
    const answerObj={
        authedUser,
        qid,
        answer
      };
    this.props.dispatch(saveQuestionAnswer(answerObj));
    this.setState({showQuestion:false,showPoll:true,option:answer},()=> this.paintAnsweredPercentage());
    //this.paintAnsweredPercentage();
  }
  viewPoll(){
    
    if(this.props.flag==="unansweredQ"){
      this.setState({showQuestion:true});
    } else if(this.props.flag==="answeredQ"){
      this.setState({showPoll:true,showQuestion:false});
    }
  }  

  render(){
    const question=this.props.location.state.question;
    const user=this.props.state.users[question.author];
    const optionOneVotes=(question.optionOne.votes?question.optionOne.votes.length:0)+(this.state.option==="optionOne"?1:0);
    const optionTwoVotes=(question.optionTwo.votes?question.optionTwo.votes.length:0)+(this.state.option==="optionTwo"?1:0);
    const totalVotes=optionOneVotes + optionTwoVotes;
    const optionOnePer=Math.round((optionOneVotes/totalVotes)*100);
    const optionTwoPer=Math.round((optionTwoVotes/totalVotes)*100);
    
    return (
     <div>
      
      {
        this.state.showQuestion && <div className="questionAsked">
            <div className="questionBody">
              <div className="userImage">
                  <img src={user.avatarURL} alt={user.name}/>
              </div>
              <div className="questionSection">
                  <h3>Would You Rather</h3>
                  <div>
                    <input type="radio" name="option" value="optionOne"/>
                    <label>{question.optionOne.text}</label>
                  </div>
                  <div>
                   <input type="radio" name="option" value="optionTwo"/>
                   <label>{question.optionTwo.text}</label>
                  </div>
                  <button onClick={()=>this.submitAnswer()}>Submit</button>     
              </div>
          </div>
        </div>
      }
      {
        this.state.showPoll && <div className="poll">
            <div className="questionBody">
              <div className="userImage">
                  <img src={user.avatarURL} alt={user.name}/>
              </div>
              <div className="pollResultSection">
                   <div className="optionRadio">
                      <div>{question.optionOne.text}</div>
                      <div className="votePercent">
                        <div className="answered">{optionOnePer||0}%</div>
                        <div className="notAnswered"></div>
                      </div>
                   </div>
                   <div className="optionRadio">
                      <div>{question.optionTwo.text}</div>
                      <div className="votePercent">
                        <div className="answered">{optionTwoPer||0}%</div>
                        <div className="notAnswered"></div>
                      </div>
                   </div>    
              </div>
          </div>
        </div>
      }
     </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {state};
}
export default connect(mapStateToProps)(QuestionNPoll);
