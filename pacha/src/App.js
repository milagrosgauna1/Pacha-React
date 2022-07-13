import React from "react";
import itemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./ItemCount.js";

const App = (props) =>{

  const carrito = () => {
    console.log ("agregaste un productos tu carrito")
  }

  return(
    <>
      <NavBar nav="Pacha"/>
      <NavBar nav="Mama"/>
      <div>
        <Card>
          <List name="aqua"/>
          <List stock={35} initial={1} />
          <List precio={50} />  
        </Card>
      </div>
      <div>
        <Card>
          <List name="terra"/>
          <List stock={28} initial={1} />
          <List precio={60} />  
        </Card>
      </div>
      <ItemCount carrito= {carrito} />
    </>
  );
}

export default App