const temaBoton = document.getElementById('tema-boton');
const body = document.body;

temaBoton.addEventListener('click', cambiarTema);

function cambiarTema() {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        temaBoton.textContent = 'Claro';
    } else {
        temaBoton.textContent = 'Oscuro';
    }
}