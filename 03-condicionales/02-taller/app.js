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

/* let estatura = prompt("Ingrese su estatura");
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
 */


// punto numero 4
/* 
let cantidad;
let precio;
let descuento1;
let descuento2;
let descuento3;
let compra;
let pagar1;
let pagar2;
let pagar3;
cantidad = prompt('ingrese la cantidad');
precio = 100;
compra = precio*cantidad;
descuento1 =compra*(10/100);
descuento2 =compra*(20/100);
descuento3 =compra*(40/100);

pagar1 = (parseFloat (compra - descuento1));
pagar2 = (parseFloat (compra - descuento2));
pagar3 = (parseFloat (compra - descuento3));
if(cantidad >=1 && cantidad <=5){
    console.log ('descuendo es:' + descuento1);
    console.log ('el total es:'+pagar1)
}
else if (cantidad >=6 && cantidad <=9){
    console.log ('descuendo es:' + descuento2);
    console.log ('el total es:'+pagar2)
}
else if(cantidad >=10){
    console.log ('descuendo es:' + descuento3);
    console.log ('el total es:'+pagar3)
}
else{
    console.log ('fallo de datos ಠ_ಠ');
    
} */

// pregunta 5
alert = ("listado de frutas disponibles:\n-manzana\n-naranja\n-banana\n-pera\n-kiwi\n-uva");
let precio = {
    manzana: 10,
    naranja: 15,
    banana: 20,
    pera: 25,
    kiwi: 30,
    uva: 35,
  };
let cantidad = prompt('ingresar cantidad');  
let frutas = prompt ('ingrese la cantidad que desea comprar');

let valorunidad = valores[frutas];
let total = valorunidad*cantidad;

  