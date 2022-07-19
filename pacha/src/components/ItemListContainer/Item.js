import React from "react";
import ItemList from "./ItemList";

const Item = ({producto}) => {
    return(
        <div className="card" style={{width:"20rem", margin:".5rem"}}>
            <div className="card-body">
              <p className="card-text">{producto.nombre}</p>
              <p className="card-text">{producto.descripcion}</p>
            </div>
        </div>
    )
}