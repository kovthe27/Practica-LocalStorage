'use strict';

const inputId = document.querySelector('#txtId');
const botonBuscar = document.querySelector('#btnBuscar');
let outputIndice = document.querySelector('#txtIndice'); 


const inputNombre = document.querySelector('#txtNombre');
const inputAnimal = document.querySelector('#txtAnimal');
const inputEdad = document.querySelector('#txtEdad');
const inputID1 = document.querySelector("#txtId1");
const inputTipo = document.querySelector("#txtAnimal");
const botonRegistrar = document.querySelector("#btnRegistrar");

botonBuscar.addEventListener('click', obtenerDatos);
botonRegistrar.addEventListener('click', agregarMascota);

function obtenerDatos(){
    let nId = inputId.value;
    let nPosicion = 0; 

    nPosicion = determinarPosicion(nId);
    document.querySelector ('#txtIndice').value = nPosicion;

};

function agregarMascota (){
    let nId1= inputID1.value;
    let bExiste=0;
    bExiste=determinarPosicion(nId1);
    let nuevoAnimal=[];

    let id=inputID1.value;
    let nNombre=inputNombre.value;
    let sTipo=inputAnimal.value;
    let nEdad=Number(inputEdad.value);

    if(bExiste!=-1){
        window.alert("Ya existe")
    }
    else{
        nuevoAnimal.push(id,nNombre,sTipo,nEdad);
        registrarMascota();
    }
}

