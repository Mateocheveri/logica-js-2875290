//ciclos y arrays

let materias = ['matematicas','sociales','español','fisica'];

console.log("tu materia es:" + materias[2])
console.log('materia 1:' + materias[0] + 'materia 2:' + materias[1] + 'materia 3:' + materias[2]);

//template literals
//
console.log(`Materia 1: ${materias[2]} y despues ${materias[0]}`);
console.log(materias[4]);
materias[4] = 'quimica';
console.log(materias)
console.log(` El arrays materias tiene ${materias.length} elementos `)
console.log(materias[5]);

console.log( Boolean (materias.length >= 6)); ///false

//quiero añadir un elemeto al final del array con length
materias[materias.length] = 'artes';
materias[materias.length] = 'ciencias';
materias.push('lo que sea')
materias.push('musica')
materias.pop

console.log(materias)

// ciclos y array

// primera practica: imprimir en una lista numerica todos los elementos de un array 'peliculas' con ayuda del ciclo for

let peliculas = ['Tron','Blade runer','Batman','Avatar',`godfhater`,'spiderman','truman show','Matrix',];
//inicializacion, condicion, incremento
// condicion i inicialisa una variable 
for(let i = 0; i < peliculas.length; i++){
    console.log( `${i+1}. ${peliculas[i]}` )

}


/* Relaizar un programa que le pida artistas o bandas musucales al usuario. con ayuda del ciclo while, 
cuando el usuario escriba "salir" se debe imprimir la lista de artistas  que el usuario ingreso, 
cada artista añadido se debe guardar en un array  */

let bandas = [];
let inputUsuario = prompt('dime una banda o "salir" para cerrar');

while(inputUsuario != 'salir'){
    bandas.push(inputUsuario)
    inputUsuario = promp('dime una banda o "salir" para cerrar')
}
for(let i = 0; i <bandas.length; ++i){
    console.log(`${i+1}. ${bandas[i]}`)
}