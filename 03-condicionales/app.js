
// programa que pregunte la edad del usuario (prompt) y depende del valor, decirle si es mayor o menor de edad.

/* let edadusuario = prompt('cual es tu edad');

if(edadusuario >= 18 ){
    console.log('Eres mayor de edad')
}
else{
    console.log ('Eres menor de edad')
}
 */


// depende del color del semaforo le damos un mensaje al usuario si pone un color diferente a rojo, amarillo o verde dirà "no se que hacer"
//.tolowerCase() transforma el texto en minusculas

/* let color = prompt('¿color semaforo?').toLowerCase();

if(color === 'rojo'){
    console.log(`detente`)
}
else if(color === 'amarillo'){
    console.log('preparese')
}
else if (color === 'verde'){
    console.log ('arranque')
}
else if(color === 'morado'){
    console.log('peligro')
}
else{
    console.log('no se que hacer')
}  */
let edad = prompt('Edad');
let nombre = prompt('Nombre').toLowerCase();

/* if(edad >= 18 && nombre){
    console.log('Puede ingresar a la discoteca')
}
else if(nombre === 'Mario' && edad >= 18 ){
    console.log('Puede ingresar al VIP')
}
else if (nombre === 'carlos' && edad >= 18){
    console.log('Puedes ingresar al VIP')
}
else{
    console.log('¡NO! puede ingresar')
}
*/


if(edad >= 18  && nombre === 'carlos' ){
    console.log('puedes ingresar al vip')
}
else if(edad >= 18 && nombre === 'mario'){
    console.log('puedes ingresar al vip')
}
else if(edad >= 18){
    console.log('Puede ingresar a la discoteca')
}
else{
    console.log('¡NO! puede ingresar')
}


