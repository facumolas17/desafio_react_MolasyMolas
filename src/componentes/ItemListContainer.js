import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productos=[{
    "id":1,
    "nombre":"Tabla para 2",
    "precio":2000
},

{
    "id":2,
    "nombre":"Tabla para 4",
    "precio":3800
},

{
    "id":3,
    "nombre":"Tabla para 6",
    "precio":5400
}];

export const ItemListenContainer= (props)=>{

  const [productList,setProductList]=([productos]);

  const myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(productos);
    },2000);
  });

  myPromise
    .then( result =>{
      setProductList(result);
    })

  return(
    <>

    <ItemCount initial={1} stock={20}/>
    <ItemList items={productList}/>
    
    </>
  );
}


export default ItemListenContainer;
