const MiComponente = ({miProp}) => {
    const[contador, setContador] = useState(0)

  const handlerClickSumar = () =>{
    setContador (contador + 1);
  }

  const handlerClickQuitar = () =>{
    setContador (contador - 1);
  }

  const reset = () =>{
    setContador(1);
  }


  return(
    <>
    <div>{miProp}</div>
    <button onClick={handlerClickSumar}>agregar</button>
    <button onClick={handlerClickSumar}>quitar</button>
    <button onClick={handlerClickSumar}>reset</button>
    </>
  );
}

export default MiComponente