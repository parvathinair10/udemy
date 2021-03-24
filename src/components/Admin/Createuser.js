import React, { Component } from 'react';
import './Createuser.css';

import CreateUserLogo from '../../assets/createuser.png'

// import {BrowserRouter,Route,Link} from "react-router-dom";
// import axios from 'axios';

class Createuser extends Component {


      //to manage the state of registration input fields
      state={
                errors:{
                              firstname:"",
                              lastname:"",
                              email:"",
                              password:""
                       }
            }



            //to check the validation of fields
            validateHandler = (event) => 
            {
                 let name = event.target.name;
                 let value = event.target.value;
                 let errors = this.state.errors;


                 switch(name)
                 {
                       case "firstname":
                             errors.firstname = value.length < 5 ? "firstname must be 5 characters length" : "";
                             break;
                       case "lastname":
                             errors.lastname = value.length < 3 ? "lastname must be 3 characters length" : "";
                             break;
                       case "email":
                             errors.email = value.length < 5 ? "email must be 5 characters length" : "";

                             let apos = value.indexOf('@');
                             let dotpos = value.lastIndexOf('.');

                             if(apos < 1 || dotpos-apos< 2)
                             {
                              errors.email="Please enter valid email id";
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
                  <div className="Createuser">
                  <div className="CreateuserStyling">
                  <img src={CreateUserLogo} alt="Error loading" id="image"></img>
                  <form>
                        <input type="text" className="input" placeholder="enter firstname" name="firstname" onChange={this.validateHandler}></input>
                        <p className="conditionalStyling">{errors.firstname}</p>
                        <input type="text" className="input" placeholder="enter lastname" name="lastname" onChange={this.validateHandler}></input>
                        <p className="conditionalStyling">{errors.lastname}</p>
                        <input type="email" className="input" placeholder="enter  email" name="email" onChange={this.validateHandler}></input>
                        <p className="conditionalStyling">{errors.email}</p>
                        <input type="password" className="input" placeholder="enter  password" name="password" onChange={this.validateHandler}></input>
                        <p className="conditionalStyling">{errors.password}</p>
                        <input type="submit" value="create users" onClick={this.validateHandler} id="btnCreateusers"></input>
                  </form>
                  </div>
                  </div>
            );
  }
}

export default Createuser;