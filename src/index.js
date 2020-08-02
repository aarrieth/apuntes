const frase = `Esta es una frase
que se será usada con
contenido multilínea.`;

console.log(frase);

const nombre = 'pedrito';
const apellido = 'perez';
const edad = 20;

console.log(`Hola... soy ${nombre} ${apellido} y tengo ${edad} años`);

function suma(x, y, z) {
    return x + y + z;
}

const numeros = [1, 2, 3];

console.log(suma(...numeros)); //6;

const familiaVargas = ['pedro', 'maría', 'juan', 'carlos', 'andrea'];

const nocheBuena = ['francisco', 'juana', 'humberto', 'camila', 'sebastián', 'marcela', 'claudia', ...familiaVargas];

console.log(...nocheBuena);

const automovil = {
    marca: 'mazda',
    color: 'negro',
    puertas: 4,
    modelo: 2018
};

const copiaAutomovil = {...automovil };

console.log(automovil);