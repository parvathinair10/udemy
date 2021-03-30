import React,{Component} from "react";
import axios from "axios";

import  './AdminRegistration.css';


class AdminRegistration extends Component
{

    constructor()
    {
      super();
      this.state={
        usertype:null,
        name:null,
        email:null,
        password:null,
        age:null,
        register:false,
        token:null
      }
    }//constructor

    register()
    {
        const config = {
            headers: {
              'Content-Type': 'application/json',
            }
          }

        axios.post("https://asc-movie-review-application.herokuapp.com/users",
        JSON.stringify(this.state),config)
        
        .then(res=>{
          console.log(res);

          //set login and token to localstorage
          localStorage.setItem('register',true);
          localStorage.setItem('token',res.data.token);

          //update the state for register
          this.setState({register:true,token:res.data.token})

          //updated token
          alert(this.state.token);
        })

        .catch(err=>{
          console.log(err);
        })
        
    }//register

     

    render()
    {
        return(
            
            <div>
            <div className="AdminRegistration">
            <div className="AdminRegistrationStyling">
            <h1 id="title">Admin Registration</h1>
            
              <input type="text" className="adminreginput" onChange={(event)=>{this.setState({usertype:event.target.value})}} placeholder="usertype"></input><br></br>
              <input type="text"  className="adminreginput" onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="name"></input><br></br>
              <input type="email"  className="adminreginput" onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="email"></input><br></br>
              <input type="password" className="adminreginput" onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="password"></input><br></br>
              <input type="text"  className="adminreginput" onChange={(event)=>{this.setState({age:event.target.value})}} placeholder="age"></input><br></br>
              <button id="btnAdminRegistration" onClick={()=>{this.register()}}>Register</button>
              
              </div>
            </div>
           </div>
          
        )
    }//render


}//class

export default AdminRegistration