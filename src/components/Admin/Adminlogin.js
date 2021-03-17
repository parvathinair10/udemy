import React, { Component } from 'react';
import './Adminlogin.css';

import {Link} from "react-router-dom";

class Adminlogin extends Component {
  render() {
    return (
        <div className="Admin">
            <div className="decoration">
            <div id="space1">
                <label for="txt1">ID:</label>
                <input type="email" id="txt1" required></input>
            </div>
            <div id="space2">
                <label for="txt2">Password:</label>
                <input type="password" id="txt2" required></input>
            </div>
            
            <button id="btn1"><Link to="/Editmovies">login</Link></button>
            </div>
            </div>
                

     );
  }
}

export default Adminlogin;