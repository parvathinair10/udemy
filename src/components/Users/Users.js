import React, { Component } from 'react';
import './Users.css';

// import {BrowserRouter,Route,Link} from "react-router-dom";

import Userlogo from '../../assets/userlogo.jpeg'

class Users extends Component {
 
 
 //to manage the state of user login input fields
 state={
  errors:{
                id:"",
                password:""
         }
      }



 
      validateUserHandler=(event)=>
      {
               let name = event.target.name;
               let value = event.target.value;
               let errors = this.state.errors;


               switch(name)
               {
                           case "email":
                           errors.id= value.length < 5 ? "email must be 5 characters length" : "";

                           let apos = value.indexOf('@');
                           let dotpos = value.lastIndexOf('.');

                           if(apos < 1 || dotpos-apos< 2)
                           {
                            errors.id="Please enter valid email id";
                           }
                           break;
                           case "password":
                           errors.password = value.length < 5 ? "password is not strong enough" : "";
                           break;

                           default:
                           break;
               }
               this.setState({errors,[name]:value});    //updating the state 
          }
      

 
 
 
 
 
 
  render() {

    const errors = this.state.errors;
    
    return (
      <div className="Userlogin">
      <div className="UserloginStyling">
      <img src={Userlogo} id="Userimage"></img>
      <form>
            <input type="email" className="userinput" placeholder="enter  ID" name="email" onChange={this.validateUserHandler}></input>
            <p className="conditionalUserStyling">{errors.id}</p>
            <input type="password" className="userinput" placeholder="enter  Password" name="password" onChange={this.validateUserHandler}></input>
            <p className="conditionalUserStyling">{errors.password}</p>
            <button id="btnUser">login</button>
      </form>
      </div>
      </div> 
          );
  }
}

export default Users;