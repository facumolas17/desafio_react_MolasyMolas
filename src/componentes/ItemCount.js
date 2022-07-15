import React, {useState} from 'react';
import '../estilos/ItemCount.css';
import ItemListenContainer from './ItemListContainer';


const ItemCount=({initial,stock,onAdd})=>{
    const [counter,setCounter]= useState(initial)
    const agregar=()=>{
        if (counter<stock){
            setCounter(counter+1);
        }
    }
    const quitar=()=>{
        if(counter>initial){
            setCounter(counter-1);
        }
   
    }
    
    
    return (
        
        <div className='counter'>
            
            <button disabled={counter <= 1} onClick={quitar}>-</button>
            <span>{counter}</span>
            <button disabled={counter>=stock} onClick={agregar}>+</button>
            <div>
                <button disabled={stock<=0} onClick={ () => onAdd(counter)} >Agregar al carrito</button>
            </div>
        </div>
        
    )
}

export default ItemCount;