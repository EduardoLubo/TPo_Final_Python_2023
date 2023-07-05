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
