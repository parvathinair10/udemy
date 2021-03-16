import React, { Component } from 'react';
import './Editmovies.css';

import {BrowserRouter,Route,Link} from "react-router-dom";

class Editmovies extends Component {
  render() {
    return (
                    <div className="Edit">
                        <ul>
                            <li><Link to="/Editmovies">EDIT</Link></li>
                            <li><Link to="/Createuser">CREATE USER</Link></li>
                        </ul>
                        <div className="decorate">
                        <div id="space1">
                            <label for="txt1">Name:</label>
                            <input type="text" id="txt1"></input>
                        </div>
                        <div id="space2">
                            <label for="txt1"> Release Date:</label>
                            <input type="text" id="txt1"></input>
                        </div>
                        <div id="space3">
                            <label for="txt1">Image:</label>
                            <input type="text" id="txt1"></input>
                        </div>
                        <div id="space4">
                            <label for="txt1">Description:</label>
                            <input type="text" id="txt1"></input>
                        </div>
                        <button className="btn">Add</button>
                        <button className="btn">Update</button>
                        <button className="btn">Delete</button>
                        </div>
                    </div>
        );
  }
}

export default Editmovies;