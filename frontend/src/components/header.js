import { Component } from 'react';

import   "./../Css/header.css"
import { NavLink } from 'react-router-dom';

 class Heading extends Component{
      render()
      {
      return (
      <>
     
       <div  className="nav">
        <div className="Left">
         <NavLink className="navlink" to="/"></NavLink>
         <NavLink className="navlink" to="/home">Home</NavLink>
         <NavLink className="navlink" to="/exploreuser">Explore</NavLink>
         <NavLink className="navlink" to="/profile">Profile</NavLink>
         <NavLink className="navlink" to="/register">Register</NavLink>
        </div>
        
         <div class="Right">
         <NavLink className="navlink" to="/login"><button className="btn btn-outline-danger">Signin</button></NavLink>
         </div>

       </div>
             
  
 </>

    )
      }
  }

  export default Heading;