/*
// Solo para la pagina
document.addEventListener("DOMContentLoaded", function() {
  // Crea el elemento del botón
  var button = document.createElement("button");
  button.id = "tema-boton";
  button.className = "tema-boton";
  button.textContent = "Oscuro";
  var divBoton = document.getElementById("miboton");
  divBoton.appendChild(button);
  
  document.getElementById("tema-boton").onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === null || currentTheme === "light"){ 
        document.documentElement.setAttribute('data-theme', "dark");
        document.getElementById('tema-boton').innerHTML = 'Claro';
        }
    else{
        document.documentElement.setAttribute('data-theme', "light");
        document.getElementById('tema-boton').innerHTML = 'Oscuro';
        }
   };
});
*/

// Codigo guarda el dato en el LocalStorage 
document.addEventListener("DOMContentLoaded", function() {
  // Crea el elemento del boton
  var button = document.createElement("button");
  button.id = "tema-boton";
  button.className = "tema-boton";
  button.textContent = "Oscuro";
  var divBoton = document.getElementById("miboton");
  divBoton.appendChild(button);
  
  // Funcion para cambiar el tema
  function cambiarTema() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var newTheme = currentTheme === "light" ? "dark" : "light";
    
    // Actualizar el atributo "data-theme" en el elemento HTML
    document.documentElement.setAttribute("data-theme", newTheme);
    
    // Actualizar el texto del botón
    document.getElementById("tema-boton").textContent = newTheme === "light" ? "Oscuro" : "Claro";
    
    // Guardar el tema seleccionado en el localStorage
    localStorage.setItem("theme", newTheme);
  }
  
  // Verificar si hay un tema guardado en el localStorage
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.getElementById("tema-boton").textContent = savedTheme === "light" ? "Oscuro" : "Claro";
  }
  
  // Asignar el evento click al botón
  document.getElementById("tema-boton").onclick = cambiarTema;
});
