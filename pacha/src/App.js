import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "../src/components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailsConntainer/ItemDetailContainer"
import ItemCount from "./ItemCount.js";
import Cart from "./components/Cart/Cart.js";
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const App = (props) =>{

  const carrito = () => {
    console.log ("agregaste un productos tu carrito")
  }

  return(
    <BrowserRouter>
      <NavBar nav="Pacha"/>
      <NavBar nav="Mama"/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="..."/>} />
        <Route path="/card/:cardId" element="" />
        <Route path="/productos/:productosId" element="" />
        <Route path="/cart" element={<Cart/>}/>

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
      </Routes>
      


      
    </BrowserRouter>
  );
}

export default App