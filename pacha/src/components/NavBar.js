import React from "react";
import logo from "../assets/Logo.jpg";
import "../components/NavBar.css";

const NavBar = () =>{
  return ( 
    <div>
      <nav>
        <div class="nav-wrapper">
          <img src={logo} alt="Logo"/>
          <ul class="right hide-on-med-and-down">
            <li><a href=""><i class="material-icons left">vpn_key</i>Reservar</a></li>
            <li><a href=""><i class="material-icons right">visibility</i>Habitaciones</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default NavBar