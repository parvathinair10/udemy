import React, { Component } from 'react';
import './Editmovies.css';


// import Defaultpage from '../start/Defaultpage';



import {BrowserRouter,Route,Link} from "react-router-dom";
import axios from 'axios';

class Editmovies extends Component {


    state={
                loadedmovie:null
          }

    componentDidUpdate(){
        if(this.props.id){
            axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
            .then(response=>{
                // console.log(response);
                this.setState({loadedmovie:response.data})
            })
        }
    }
    
    
  render() 
  {
    
    
    // if(this.props.id)
    // {
    //   const movie=<p>loading...</p>
    // }
    // if(this.state.loadedmovie)
    // {
        
    //  const selected=<div>{this.state.loadedmovie.title}</div>
    // }
    
    return (
                    
                        <div className="Edit">

                        <ul>
                            <li><Link to="/Editmovies">EDIT</Link></li>
                            <li><Link to="/Createuser">CREATE USER</Link></li>
                        </ul>
                        
                        

                        <form>

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

                        </form>

                    </div>
                    
                   
                    
                    
        );
      
  }
}

export default Editmovies;