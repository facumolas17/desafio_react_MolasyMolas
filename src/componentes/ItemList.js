import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";


console.log(productos);

let ban=true;
           
let productos=[{nombre:"Tabla para 2", id:"1",precio:"1200"},{nombre:"Tabla para 4", id:"2",precio:"2000"},
{nombre:"Tabla para 6", id:"3",precio:"2800"}];


let encontrarProducto=(tiempo,pedido)=>{
    return new Promise((resolve,reject)=>{
        if(ban){
            setTimeout(()=>{
                resolve(pedido)
            },tiempo)
        }else{
            reject("Error") 
        }
    });
}

encontrarProducto(2000,productos)
    .then(datos=>{console.log(datos)})
    .catch(error=>console.log(error))