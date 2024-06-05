import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

// Agregar evento clic
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(event) {
        // REMOVER ACTIVO
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });

        // AGREGAR ACTIVE AL QUE CORRESPONDA
        this.classList.add('active');

        // Obtener contenido según enlace
        let contenido = obtenerContenido(this.textContent);

        // Mostrar contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});

// FUNCION PARA TRAER LA INFORMACION DESDE CIUDADES JS
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
