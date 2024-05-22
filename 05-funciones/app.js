//FUNCIONES
//Funcion que salude al usuario 

/* let nombreUsuario =prompt('dime tu nombre');

//declaracion de funcion 
function saludar (nombre){
    console.log('funcion ejecutada...')
    return `bienvenido ${nombre}`
    console.log('esto nunca se podra ver ya que el return finaliza la funcion ')

}
//llamado de una funcion
console.log( saludar (nombreUsuario) );
 */

/* Hacer una funcion que multiplique  dos numeros la funcion debe retornar solamente el resultado de la operacion.
llamar a la funcion "multiplicar" */

/* let numero1 =prompt('ingrese el primer numero:');
let numero2 =prompt('ingrese el segundo numero:');

function multiplicar (num1,num2){
    return num1 * num2
}
console.log(multiplicar(numero1,numero2)) */

/* crear una funcion que le diga cuanto debe ahorrar al mes segun sus ingresos.  "saca el 10% de lo que usted gana"
que la funcion se llame 'calcularAhorro'  */

let ingresos = prompt('ingrese sus ganancias mensuales')
let ahorro = (10/100);

function calcularAhorro(ingre,ahor){
    return ingre * ahor
}
console.log(calcularAhorro(ingresos,ahorro))
