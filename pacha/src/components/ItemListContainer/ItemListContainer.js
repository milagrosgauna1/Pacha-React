import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { getData } from "../../mocks/fakeApi";


import const ItemListContainer = ({greeting}) => {
    const [listaProducto, setListaProducto]= useState([])
    const [cargando, setCargando]= useState(true)

    useEffect(()=>{
        getData
        .then((result)=> setListaProducto(result))
        .catch((error)=> console.log(error))
        .finally(()=>setCargando(false) )
    },[])

    return(
        <div>
            <h1> {greeting} </h1>
            {cargando ? <p>Se estan cargando tus opciones...</p> : <ItemList listaProductos={listaProducto}/>}
        </div>
    )

    function ItemListContainer () {List}
     <List type="text"/>;
}

export default ItemListContainer