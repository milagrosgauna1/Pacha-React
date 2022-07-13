import React,{useState} from "react";
import { createRenderer } from "react-dom/test-utils"

const ItemCount = ({name, stock, initial, Carrito}) => {
  const [contador, setContador] = useState(0)
  const count = (value) => {
    const result = amount + value
    if(result<=stock)
      setContador (contador+value) 
  }

  function ItemCount ({Stock}) {
    const [stock, setStock] = useState (35)
  }

  const handlerClickSumar = () =>{
    setContador (contador + 1);
  }

  const handlerClickQuitar = () =>{
    setContador (contador - 1);
  }

  const reset = () =>{
    setContador(1);
  }

  const carrito = () => {
    <button onClick={Confirmar}/>
    carrito();
  }

  return(
    <>
    <div>{miProp}</div>
    <h1> {name} </h1>
    <button onClick={()=>handlerClickSumar(+1)}>+</button>
    <span> {contador} | {stock} </span>
    <button onClick={()=>handlerClickQuitar(-1)}>-</button>
    <button onClick={reset}>Reset</button>
    </>
  );
}

export default ItemCount