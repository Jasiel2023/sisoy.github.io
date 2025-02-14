const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const btnRecuerdo = document.getElementById("mostrarImagen");
const imagenRecuerdo = document.getElementById("imagenRecuerdo");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");

                // Mostrar el botón "Primer recuerdo"
                btnRecuerdo.style.display = "block";
                setTimeout(() => {
                    btnRecuerdo.classList.add("show-btn");  
                }, 100);
            }, 500);
            
            envoltura.classList.add("desactivar-sobre");
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta");
                
                
                btnRecuerdo.classList.remove("show-btn");  
                setTimeout(() => {
                    btnRecuerdo.style.display = "none";  
                    imagenRecuerdo.style.display = "none"; 
                }, 500);
            }, 500);
        }
    } 


    if (e.target.matches("#mostrarImagen")) {
      
        if (imagenRecuerdo.style.display === "none" || imagenRecuerdo.style.display === "") {
         
            imagenRecuerdo.style.display = "block"; 
            setTimeout(() => {
                imagenRecuerdo.classList.add("mostrar-imagen");  
            }, 100); 
        } else {
           
            imagenRecuerdo.classList.remove("mostrar-imagen");
            setTimeout(() => {
                imagenRecuerdo.style.display = "none";  
            }, 500); 
        }
    }
});