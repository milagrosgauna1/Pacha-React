import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./ItemCount.js"

const App = (props) =>{

  const carrito = () => {
    console.log ("agregaste un productos tu carrito")
  }

  return(
    <>
      <NavBar nav="Pacha"/>
      <NavBar nav="Mama"/>
      <div>
        <List text= "nombre del producto"/>
        <List text= "descripcion del producto"/>
        <List text= "precio del producto"/>
      </div>
      <ItemCount carrito= {carrito} />
    </>
  )
}

export default App