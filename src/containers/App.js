import React, { Component } from 'react';
import './App.css';

import movies from "../components/start/Movieslist";
import Defaultpage from '../components/start/Defaultpage'
import Adminlogin from '../components/Admin/Adminlogin';
import Editmovies from '../components/Admin/Editmovies';
import Createuser from '../components/Admin/Createuser';
import Users from '../components/Users/Users';

import {BrowserRouter,Route,Link,Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (

      <div>
          <BrowserRouter>
      <header>
       <nav class="navbar">
        <ul>
         <li>
           <Link to="/Adminlogin">Admin</Link>
          </li>
         <li>
           <Link to="/Users">User</Link>
           </li>
           <li>MovieReviewApp</li>
             <div class="search">
              <input type="text" name="search" id="search" placeholder="search for "></input>
           </div>
         </ul>
        </nav>
       </header>
       
       <Switch>
         <Route path="/Defaultpage" component={Defaultpage}></Route>
        <Route path="/Adminlogin" component={Adminlogin}></Route>
        <Route path="/Editmovies" component={Editmovies}></Route>
        <Route path="/Createuser" component={Createuser}></Route>
        <Route path="/Users" component={Users}></Route>
        </Switch>
        <Defaultpage movname={movies[0].name} movdate={movies[0].date} movlink={movies[0].link} movdesc={movies[0].description}></Defaultpage>
        <Defaultpage movname={movies[1].name} movdate={movies[1].date} movlink={movies[1].link} movdesc={movies[1].description}></Defaultpage>
        <Defaultpage movname={movies[2].name} movdate={movies[2].date} movlink={movies[2].link} movdesc={movies[2].description}></Defaultpage>
        <Defaultpage movname={movies[3].name} movdate={movies[3].date} movlink={movies[3].link} movdesc={movies[3].description}></Defaultpage>
        </BrowserRouter>
       </div>
     );
  }
}

export default App;
