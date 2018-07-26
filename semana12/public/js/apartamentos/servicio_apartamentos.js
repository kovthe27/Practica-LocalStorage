'use strict';
// const mMascotas= [
//     ['M01', 'Athos', 'Gato', 1],
//     ['M02', 'Tsunade', 'Gato', 2],
//     ['M03', 'Aramis', 'Gato', 3],
//     ['M04', 'Portos ', 'Gato', 1],
//     ['M05', 'Navaroog', 'Dragón', 150],
//     ['M06', 'Sphinx ', 'Dragón', 75],
//     ['M07', 'Alaska', 'Dragón', 49],
//     ['M08', 'Jack', 'Perro ', 8],
//     ['M09', 'Nakako', 'Perro ', 4]
    
// ];

function obtenerListaMascotas(){
    let mMascotas=JSON.parse(localStorage.getItem("mMascotasLS"));

    if(mMascotas == null){
        mMascotas= [
            ['M01', 'Athos', 'Gato', 1],
            ['M02', 'Tsunade', 'Gato', 2],
            ['M03', 'Aramis', 'Gato', 3],
            ['M04', 'Portos ', 'Gato', 1],
            ['M05', 'Navaroog', 'Dragón', 150],
            ['M06', 'Sphinx ', 'Dragón', 75],
            ['M07', 'Alaska', 'Dragón', 49],
            ['M08', 'Jack', 'Perro ', 8],
            ['M09', 'Nakako', 'Perro ', 4]
            
        ];
    }
    
    return mMascotas;
};

function determinarPosicion(pnId){
    let nPosicion = -1; 
    let mMascotas= obtenerListaMascotas();
    for(let i = 0; i < obtenerListaMascotas().length; i++){
        if(mMascotas[i][0] == pnId){
            nPosicion = i;
        }
    }
    return nPosicion;
};

function registrarMascota(pmMascota){
    let mMascota = obtenerListaMascotas();
    mMascota.push(pmMascota);

    localStorage.setItem('mMascotasLS', JSON.stringify(mMascota));
};
