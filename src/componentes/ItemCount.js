import React, {useState} from 'react';

const ItemCount=({initial,stock})=>{
    const [counter,setCounter]= useState(initial)
    const agregar=()=>{
        if (counter<stock){
            const aux=counter+1;
            setCounter(aux);
        }
    }
    const quitar=()=>{
        if(counter>initial){
            const aux=counter-1;
            setCounter(aux);
        }
   
    }
    
    const onAdd=()=>{
        console.log(`Se agregaron al carrito ${counter} del producto`);
    }
    
    return (
        <div>
            <div>
                <button onClick={quitar}>-</button>
                <p>{counter}</p>
                <button onClick={agregar}>+</button>
            </div>
            <button onClick={onAdd} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;