import React, { Component } from 'react';
import './Createuser.css';

// import {BrowserRouter,Route,Link} from "react-router-dom";
import axios from 'axios';

class Createuser extends Component {
  render() {
    return (
      <div className="Createuser">
        <div className="styling">

        <div className="spacing">
                <label for="reg1">Firstname:</label>
                <input type="text" id="reg1" required></input>
          </div>
          <div className="spacing">
                <label for="reg2">Lastname:</label>
                <input type="text" id="reg2" required></input>
          </div>
          <div className="spacing">
                <label for="reg3"> Emailid:</label>
                <input type="email" id="reg3" required></input>
          </div>
          <div className="spacing">
                <label for="reg4">Password:</label>
                <input type="password" id="reg4" required></input>
          </div>
          <button id="create">Create</button>
      </div>
      </div> 
        );
  }
}

export default Createuser;