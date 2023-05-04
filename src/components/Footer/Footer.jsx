import React from "react"

function Footer(){
    return(
        <footer>
        <p>Copyright © 
        <script>
            {document.write(new Date().getFullYear())}
        </script> Brain Boost. Todos los derechos reservados.</p>
  </footer>

    )}
