const producto = [
    {id:"1", nombre: "tierra", descripcion: "habitacion con vista al jardin", precio: "100", stock: "8"},
    {id:"2", nombre: "agua", descripcion: "habitacion con vista al mar", precio: "100", stock: "10"},
    {id:"3", nombre: "aire", descripcion: "habitacion con vista a la montaña", precio: "100", stock: "10"},
    {id:"4", nombre: "fuego", descripcion: "habitacion con hidromasaje", precio: "150", stock:"5"},
    {id:"5", nombre: "luz", descripcion: "habitacion con techo descubierto", precio: "170", stock:"3"},
]

export const getData = new Promise ((resolve, reject) => {
    let condition = true
    setTimeout(()=>{
        if (condition){
            resolve(producto)
        }else{
            reject("salio mal")
        }
    },2000)
})