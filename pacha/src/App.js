import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import MiComponente from "./MiComponente.js"

const App = (props) =>{

  return(
    <>
      <NavBar nav="Pacha"/>
      <NavBar nav="Mama"/>
      <div>
        <List text= "nombre del producto"/>
        <List text= "descripcion del producto"/>
        <List text= "precio del producto"/>
      </div>
      <MiComponente/>
    </>
  )
}

export default App