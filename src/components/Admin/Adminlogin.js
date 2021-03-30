import React, { Component } from 'react';
import './Adminlogin.css';

import Adminlogo from '../../assets/adminlogo.jpg'

import {Link} from "react-router-dom";
import axios from "axios";

import Editmovies from "./Editmovies"


class Adminlogin extends Component {
  
   //to manage the state of admin login input fields
   constructor(){
         super();

         this.state={
            errors:{
                          email:null,
                          password:null,
                          login:false,
                          token:null
                   }
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
                             errors.email= value.length < 5 ? "email must be 5 characters length" : "";

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
        
            login()
            {
                  const config = {
                        headers: {
                          'Content-Type': 'application/json',
                        }
                      }
            
                    axios.post("https://asc-movie-review-application.herokuapp.com/users/login",
                    JSON.stringify(this.state),config)
                    
                    .then(res=>{
                      console.log(res);
            
                      //set login and token to localstorage
                      localStorage.setItem('login',true);
                      localStorage.setItem('token',res.data.token);
            
                      //update the state for register
                      this.setState({login:true,token:res.data.token})
            
                      //updated token
                      alert(this.state.token);
                    })
            
                    .catch(err=>{
                      console.log(err);
                    })
            }
  
            
          
  
  render() {

    const errors = this.state.errors;

    return (
      <div className="Adminlogin">

            {!this.state.login ?
      <div className="AdminloginStyling">
      <img src={Adminlogo} alt="Error loading" id="Adminimage"></img>
      
            <input type="email" className="admininput" placeholder="enter  ID" name="email" onChange={this.validateAdminHandler}></input>
            <p className="conditionalAdminStyling">{errors.email}</p>
            <input type="password" className="admininput" placeholder="enter  Password" name="password" onChange={this.validateAdminHandler}></input>
            <p className="conditionalAdminStyling">{errors.password}</p>
            {/* <button id="btnAdmin"><Link to="/Editmovies">login</Link></button> */}
            <button id="btnAdmin"  onClick={()=>{this.login()}}>login</button>
      <br></br>
     
      <div>
           <Link to="/AdminRegistration" id="adminRegistrationlink">Not Registered??</Link>  
      </div>
      </div>
       :<Editmovies></Editmovies>}
      </div> 
);
  
}
}



export default Adminlogin;