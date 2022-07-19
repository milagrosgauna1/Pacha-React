import React from "react";
import logo from "../assets/Logo.jpg";
import "../components/NavBar.css";
import { Link } from "react-router-dom"

const NavBar = (nav) =>{
  console.log ("NavBar props:", {nav});

  return (
    <nav>
      <div class="nav-wrapper">
        <img src={logo} alt="Logo"/>
        <ul class="right hide-on-med-and-down">
          <li><Link to="/"><i class="material-icons left">vpn_key</i>Reservar</Link></li>
          <li><Link to="/"><i class="material-icons right">visibility</i>Habitaciones</Link></li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar