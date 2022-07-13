import React from "react";
import Item from "../components/Item"

const ItemList = (props) => {
    console.log(props.listaProducto)
    return (
        <div>
            <h1>Habitaciones</h1>
            <div style={{display: "flex", justifyContent:"space-between", alingItems:"center", flexWrap:"wrap"}}></div>
            {listaProducto.map((producto)=> <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}

export default ItemList