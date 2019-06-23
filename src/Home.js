import React,{Component} from 'react';
import { connect } from 'react-redux'
import './App.css';
import Post from './Post';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      showUnansweredTab:true,
      showAnsweredTab:false
    };
  }
  componentDidMount(){
    let unansweredHeader=document.getElementsByClassName("unansweredHeader")[0];
    unansweredHeader.style["cursor"]="auto";
    unansweredHeader.style["background"]="white";
    unansweredHeader.style["color"]="black";
  }
  qTabsClicked(event){
    const tabClicked=event.target.textContent;
    let unansweredHeader=document.getElementsByClassName("unansweredHeader")[0];
    let answeredHeader=document.getElementsByClassName("answeredHeader")[0];
    if(tabClicked.indexOf('Unanswered') > -1){
      unansweredHeader.style["cursor"]="auto";
      unansweredHeader.style["background"]="white";
      unansweredHeader.style["color"]="black";
      answeredHeader.style["background"]="green";
      answeredHeader.style["cursor"]="pointer";
      answeredHeader.style["color"]="white";
      this.setState({
        showUnansweredTab:true,
        showAnsweredTab:false
      });
    } else if(tabClicked.indexOf('Answered') > -1){
      answeredHeader.style["cursor"]="auto";
      answeredHeader.style["background"]="white";
      answeredHeader.style["color"]="black";
      unansweredHeader.style["background"]="green";
      unansweredHeader.style["cursor"]="pointer";
      unansweredHeader.style["color"]="white";
      this.setState({
        showUnansweredTab:false,
        showAnsweredTab:true
      });
    }
  }

  render(){
    
    const signedInUser=this.props.state.signedIn.user;
    const signedInUserObj=this.props.state.users[signedInUser];
    const totalQ=Object.keys(this.props.state.questions);
    const answeredQ=Object.keys(signedInUserObj['answers']);
    const unansweredQ=totalQ.filter(ques=>{
      if(signedInUserObj['answers'][ques]){
        return false;
      }
      return true;
    })
    return (
     <div className="home">
       <div className="qTabs" onClick={(event)=>{this.qTabsClicked(event)}}>
         <div className="unansweredHeader">Unanswered Questions</div> |
         <div className="answeredHeader"> Answered Questions</div>
       </div>
       <div className="questionsContainer">
           {this.state.showUnansweredTab && unansweredQ.map(ques => <Post question={ques} flag="unansweredQ" key={ques}/>)}
           {this.state.showAnsweredTab && answeredQ.map(ques => <Post question={ques} flag="answeredQ" key={ques}/>)}
       </div>
     </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {state};
}
export default connect(mapStateToProps)(Home);
