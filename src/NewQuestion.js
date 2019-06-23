import React,{Component} from 'react';
import { connect } from 'react-redux'
import './App.css';
import { saveNewQuestion} from './actions/asyncActions.js';

class NewQuestion extends Component {

  state={
    message:false
  }
  submitNewQuestion(){
    const optionOneText=document.getElementsByClassName("optionOneText")[0].value;
    const optionTwoText=document.getElementsByClassName("optionTwoText")[0].value;
    const author=this.props.state.signedIn.user;
    const question={
      author,
      optionOneText,
      optionTwoText
    };
    this.props.dispatch(saveNewQuestion(question));
    document.getElementsByClassName("optionOneText")[0].value="";
    document.getElementsByClassName("optionTwoText")[0].value="";
    this.setState({message:true});
  }
  render(){
    return (
     <div className="newQuestion">
       <header>Complete the question</header>
       <div>
          Would you rather:
          <div className="optionOne">
            <input type="text" className="optionOneText"/>
          </div>
            OR<br/>
          <div className="optionTwo">
            <input type="text" className="optionTwoText"/>
          </div>
          <button className="submit" onClick={()=>this.submitNewQuestion()}>Submit</button>
          {this.state.message && <div>  Question Submitted Successfully </div>}
       </div>
     </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {state};
}
export default connect(mapStateToProps)(NewQuestion);