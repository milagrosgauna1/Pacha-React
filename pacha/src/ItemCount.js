import { createRenderer } from "react-dom/test-utils"

const ItemCount = ({miProp, Carrito}) => {
  const[contador, setContador] = useState(0)

  function ItemCount ({Stock}) {
    const [stock, setStock] = useState (35)
  }

  <ItemCount stock={"35"} initial= {"1"}/>

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
    <button onClick={handlerClickSumar}>agregar</button>
    <button onClick={handlerClickQuitar}>quitar</button>
    <button onClick={reset}>reset</button>
    </>
  );
}

export default ItemCount