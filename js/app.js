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
    mostrarAutos(); // muestra los years al cargar la pag

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
    datosBusquda.minimo = e.target.value;
});

maximo.addEventListener('change', e => {
    datosBusquda.maximo = e.target.value;
});

puertas.addEventListener('change', e => {
    datosBusquda.puertas = e.target.value;
});

transmision.addEventListener('change', e => {
    datosBusquda.transmision = e.target.value;
});

color.addEventListener('change', e => {
    datosBusquda.color = e.target.value;

    console.log(datosBusquda);
});


// Funciones
function mostrarAutos(){
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
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

    console.log(resultado);
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