import React from 'react'

const Item = ({product}) => {
  return (
    <>
        <div>{product.nombre}</div>
        <div>{product.precio}</div>

    </>
  )
}

export default Item;