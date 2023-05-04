import React from "react";
import NavBar from '../../components/NavBar/Navbar';

function Landing (){
    return(
        <div>
             <header>
           <NavBar/>
        </header>
        <main>
          <section>
            <h1>Personaliza Tus Entrenamientos</h1>
            <button>Planes</button>
          </section> 
        </main>
        </div>
       
    )
}
export default Landing
