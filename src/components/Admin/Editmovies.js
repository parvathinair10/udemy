import React, { Component } from 'react';
import './Editmovies.css';


// import Defaultpage from '../start/Defaultpage';




import {Link} from "react-router-dom";
import axios from 'axios';

class Editmovies extends Component {

    

    state={
                name:'',                            //for textboxes
                date:'',
                image:'',
                description:'',

                loadedmovie:null
          }

    componentDidUpdate(){
        if(this.props.id){
            axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
            .then(response=>{
                console.log(response);
                this.setState({loadedmovie:response.data})
            })
        }
    }


    //to add the data of (name,date,image,description)
    postDataHandler=()=>{
        const movie={
                        name:this.state.name,
                        date:this.state.date,
                        image:this.state.image,
                        description:this.state.description
                    }
        axios.post('https://jsonplaceholder.typicode.com/posts',movie)
             .then(response=>{
                 console.log(response);
             })
    }

    //to delete 
    deletePostHandler=()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
             .then(response=>{
                 console.log(response);
             })
    }
    
    
  render() 
  {
    
    
    // if(this.props.id)
    // {
    //     console.log(this.props.id);
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
                        
                        
                        {/* Starting of the form */}
                        <form>

                        <div className="decorate">

                        <div id="space1">
                            <label for="txt1">Name:</label>
                            <input type="text" id="txt1" className="editinput" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}></input>
                        </div>

                        
                        <div id="space2">
                        <label for="txt2">Release Date:</label>
                        <input type="date" id="txt2" className="editinput" value={this.state.date} onChange={(event) => this.setState({date: event.target.value})}></input>
                        </div>

                        <div id="space3">
                        <label for="txt3">Select files:</label>
                        <input type="file" id="txt3" className="editinput" value={this.state.image} onChange={(event) => this.setState({image: event.target.value})} ></input>
                        </div>

                        <div id="space4">
                            <label for="txt4">Description:</label>
                            <input type="text" id="txt4" className="editinput" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}></input>
                        </div>
                        
                        <button className="btn" onClick={this.postDataHandler}>Add</button>
                        <button className="btn">Update</button>
                        <button className="btn">Delete</button>
                       
                        </div>

                        

                        </form>

                    </div>
                    
                   
                    
                    
        );
      
  }
}

export default Editmovies;