// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusquda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // muestra los years al cargar la pag

    llenarSelect();

});


// Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusquda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusquda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusquda.minimo = parseInt(e.target.value);
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusquda.maximo = parseInt(e.target.value);
    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusquda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusquda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusquda.color = e.target.value;
    filtrarAuto();
});


// Funciones
function mostrarAutos(autos){
    limpiarHTML();
    autos.forEach( auto => {
        
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color} 
        `;

        resultado.appendChild(autoHTML);
    });
}


function llenarSelect(){

    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    mostrarAutos(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusquda;

    if(marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusquda;

    if(year){
        return auto.year === year;
    }
    return auto;
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrarMinimo(auto){
    const {minimo} = datosBusquda;

    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusquda;

    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusquda;

    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusquda;

    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusquda;

    if(color){
        return auto.color === color;
    }
    return auto;
}