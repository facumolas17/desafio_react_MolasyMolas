import React from "react";
import ItemCount from "./ItemCount";
function CartWidget(){
  return(
    <>
    <button type="button" className="btn btn-dark  position-relative">
    <i className="bi bi-cart"></i>

  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
      
  </span>
</button>
      
    </>  
  );
}

export default CartWidget;