const pantalla = document.getElementById('titulo');
const pantalla2 = document.getElementById('padre');
const miBtn = document.getElementById('btn');



//crear el evento
// permite que pase un evento y funciones 
miBtn.addEventListener('click', function(){
    pantalla.style.color = 'blueviolet';//cambiar color
    pantalla.innerText = "Ejecutando script ☜(ﾟヮﾟ☜)"; //cambia el texto dentro de las etiquetas
    pantalla.style.color = 'Blue';
    pantalla.style.fontSize = '10em';
    pantalla.innerText = "estoy perdido🤡";
    pantalla2.style.color ='red';
    pantalla2.innerText = "esta vivoooooo 💀😈"
});


console.log(pantalla)
console.log(miBtn)

 
/* 
let p = {
    style: {
        color: 'rojo',
        fontSize: '3em' 
    },
    innerText: 'holamundo',
    onclick: 'función'
}

p.style.color = 'blue'; */


//contador
//1. captura variables
const contador = document.getElementById('contador');
const menos = document.getElementById('menos');
const reset = document.getElementById('reset');
const mas = document.getElementById('mas');
let i = 0;
//2. creacion de funciones
function decrementar(){
   if(i>0){
     i--;
     contador.innerText = i;
   }
}
function resetear(){
    i=0
    contador.innerText = i;
}
function incrementar(){
    if (i < 20){
     i++;
     contador.innerText = i;
    }
}

menos.addEventListener('click', decrementar);
reset.addEventListener('click',resetear);
mas.addEventListener('click', incrementar);




