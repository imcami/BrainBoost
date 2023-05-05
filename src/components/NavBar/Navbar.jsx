import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
function NavBar(){
    return(
        <div>
                 <ul>
              <li className="logo">Brain Boost 🚀</li>
              <li><NavLink exact to="#">Inicio</NavLink></li>
              <li><NavLink exact to="#">Planes</NavLink></li>
              <li className="account-link">
                <span>¿Ya tienes una cuenta?</span>
                <NavLink to="#">Crear Cuenta</NavLink>
              </li>
              <li><NavLink exact to="#">Sobre nosotros</NavLink></li>
              <li><NavLink exact to="#">Contacto</NavLink></li>
            </ul>
        </div>
       
          );
        }
        

      export default NavBar