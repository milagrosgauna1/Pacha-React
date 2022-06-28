import React from "react";
import logo from "../assets/Logo.jpg"

const NavBar = () =>{
    return ( 
      <nav>
         <div class="nav-wrapper">
             <a href={logo} class="brand-logo">Logo</a>
             <ul class="right hide-on-med-and-down">
               <li><a href="sass.html"><i class="material-icons left">search</i>Link with Left Icon</a></li>
               <li><a href="badges.html"><i class="material-icons right">view_module</i>Link with Right Icon</a></li>
             </ul>
         </div>
      </nav>
  )
}

export default NavBar