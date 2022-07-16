import React from 'react';
import Item from './Item';
import ItemListenContainer from './ItemListContainer';

const ItemList=( {items} )=> {
  return (
    <>
    {
     items.map( item => < Item key={item.id} product={item}/> )
    }
    </>
  )
}

export default ItemList;