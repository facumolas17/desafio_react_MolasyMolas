import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";

function NavBar() {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3">
            <a className="navbar-brand" href="#"><img className="img-fluid" src={require("../images/Logo.png")} alt="Logo empresarial"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Regalos empresariales</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item nav-link">
                    <CartWidget/> 
                </li>
              </ul>
            </div>
          </nav>

    </>
  );
}

export default NavBar;