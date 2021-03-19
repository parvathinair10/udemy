import React, { Component } from 'react';
import './Defaultpage.css';

// import {BrowserRouter,Route,Link} from "react-router-dom";
// import axios from 'axios';

class Defaultpage extends Component {
  render() {
    return (
      <div className="cards">
      <div className="card">
         <h3 onClick={this.props.clicked}>Name:{this.props.movname}</h3>
         <h5>Release Date:{this.props.movdate}</h5>
         <img src={this.props.movlink}
          alt="error loading" 
          className="cardimg"></img>
          <p>DESCRIPTION:{this.props.movdesc}</p>
          <h4>REVIEW: {this.props.movreview}</h4>
          <input type="text" placeholder="write a review"></input>
          <button>Post</button>
      </div>
   </div>      
        );
  }
}

export default Defaultpage;