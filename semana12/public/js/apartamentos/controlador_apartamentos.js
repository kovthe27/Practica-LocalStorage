'use strict';

const inputId = document.querySelector('#txtId');
const botonBuscar = document.querySelector('#btnBuscar');
let outputIndice = document.querySelector('#txtIndice'); 


const inputNombre = document.querySelector('#txtNombre');
const inputAnimal = document.querySelector('#txtAnimal');
const inputEdad = document.querySelector('#txtEdad');



botonBuscar.addEventListener('click', obtenerDatos);


function obtenerDatos(){
    let nId = inputId.value;
    let nPosicion = 0; 

    nPosicion = determinarPosicion(nId);
    document.querySelector ('#txtIndice').value = nPosicion;

};

function agregarMascota (){}
