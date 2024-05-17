//punto numero 1
/* 
 let altura = prompt("Ingrese su altura").toLowerCase();

if (altura <= 150) {
    console.log("Persona baja");
} else if (altura >= 151 && altura <= 170) {
    console.log("Persona de altura media");
} else {
    console.log("Persona alta");
}  
 */

//punto numero 2

/* 
let Matematicas = prompt("Ingrese nota en Matemáticas:");
let Español = prompt("Ingrese nota en Español:");
let Sociales = prompt("Ingrese nota en Sociales:");
let promedio = (parseFloat(Matematicas) + parseFloat(Español) + parseFloat(Sociales) )/3;


if (promedio === 10) {
    console.log("Excelente");
} 
else if (promedio >= 7 && promedio < 10) {
    console.log("Bueno");
}
else if (promedio < 7){
    console.log("Insuficiente");
}
else{
    console.log("datos insuficientes")
} */

//punto numero 3

let estatura = prompt("Ingrese su estatura");
let velocidad = prompt("Ingrese su velocidad");
let edad = prompt("Ingrese su edad");

if (estatura >= 180 && velocidad >= 15 && edad < 18) {
        console.log(" Has sido seleccionado para las divisiones de menores. ");
}
else if (estatura >= 180 && velocidad>= 15 && edad >= 18){
     console.log(" Has sido seleccionado.");
}
else {
    console.log(" No cumples con los requisitos.");
}


// punto numero 4

let cantidadEscritorios = prompt("Ingrese la cantidad de escritorios comprados:");
let precioPorEscritorio = 100; 
let descuento = 0;
let totalAPagar = cantidadEscritorios * precioPorEscritorio - descuento;


