import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { productos } from "../utilidades/productos";


export const ItemListenContainer= (props)=>{

  const onAdd=(quantity)=>{
    console.log(`Se agregaron al carrito ${quantity} unidades`);
}
  const [productList,setProductList]=useState([productos]);

  
  useEffect(() => {
 
  const myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(productos);
    },2000);
  });

  myPromise
    .then( result =>{
      setProductList(result);
    })
  });
  return(
    <>

    <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    <ItemList items={productList}/>
    
    </>
  );
}


export default ItemListenContainer;
