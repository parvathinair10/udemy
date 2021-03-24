import React, { Component } from 'react';
import './Adminlogin.css';

import Adminlogo from '../../assets/adminlogo.jpg'

import {Link} from "react-router-dom";

//for login
import {connect} from "react-redux";
import {fetchUser} from "../../redux";

class Adminlogin extends Component {
  
   //to manage the state of admin login input fields
   state={
    errors:{
                  email:"",
                  password:""
           }
        }
  

        validateAdminHandler=(event)=>
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
        
  
  
            //to submit the form
            submitHandler = (event) => {
                  event.preventDefault();
                  this.props.onAuth(this.state.errors.email.value, this.state.errors.password.value);
              }
          
  
  render() {

    const errors = this.state.errors;

    return (

      
        
      <div className="Adminlogin">
      <div className="AdminloginStyling">
      <img src={Adminlogo} alt="Error loading" id="Adminimage"></img>
      <form onSubmit={this.submitHandler}>
            <input type="email" className="admininput" placeholder="enter  ID" name="email" onChange={this.validateAdminHandler}></input>
            <p className="conditionalAdminStyling">{errors.email}</p>
            <input type="password" className="admininput" placeholder="enter  Password" name="password" onChange={this.validateAdminHandler}></input>
            <p className="conditionalAdminStyling">{errors.password}</p>
            <button id="btnAdmin"><Link to="/Editmovies">login</Link></button>
      </form>
      </div>
      </div> 
);
  
}
}

//get the updated state value
const mapDispatchToProps = dispatch => {
      return {
          onAuth: (email, password) => dispatch(fetchUser(email, password))
      };
  };

export default connect(null,mapDispatchToProps)(Adminlogin);