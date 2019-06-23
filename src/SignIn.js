import React,{Component} from 'react';
import { connect } from 'react-redux';
import {LOGIN} from './actions/signInAction';

export class SignIn extends Component{

    submitUser(){
        const selectElement=document.getElementById("userids");
        const selectedUser=selectElement.options[selectElement.selectedIndex].value;
        if(selectedUser!==""){
            this.props.dispatch(LOGIN(selectedUser));
        }
    }
    render(){
        const username=Object.keys(this.props.state.users);
        // const userObjectArray=username.map((name)=>{
        //     return this.props.state.users[name];
        // })
        return(
            <div className="signInBlock">
                <div className="userListBox">
                    <select id="userids">
                        <option value="">Select User</option>
                        {username.map(user=>
                            <option key={user} value={user}>{user}</option>
                        )}
                        
                    </select>
                </div>
                <div className="signInButton">
                    <input type="button" value="SignIn" onClick={()=>this.submitUser()}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {state};
  }
  export default connect(mapStateToProps)(SignIn);
  