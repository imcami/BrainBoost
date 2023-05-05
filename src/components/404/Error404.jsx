import React from "react";
import { Link } from "react-router-dom";

function Error404(){
    return(
        <>

        <h1>Eror 404</h1>
        <Link to={`/`}> 
                    <button className="btn btn-danger bg-gradient mt-3">Volver al Inicio</button>
                </Link>
    
        </>
    )
}
export default Error404