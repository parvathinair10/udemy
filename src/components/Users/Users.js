import React, { Component } from 'react';
import './Users.css';

import {BrowserRouter,Route,Link} from "react-router-dom";

class Users extends Component {
  render() {
    return (
        <div className="Users">
            <div className="userstyle">
            <div>
                <label for="usr1">ID:</label>
                <input type="email" id="usr1" required></input>
            </div>
            <div>
                <label for="usr2">Password:</label>
                <input type="password" id="usr2" required></input>
            </div>
            
            <button id="Usrlogin">login</button>
            </div>
            </div>
                

     );
  }
}

export default Users;