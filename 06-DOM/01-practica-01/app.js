//ejercicio del boton
//1. variables
const miInput = document.getElementById('boton');

//2. funciones
function cambiarValue(){
    console.log(miInput.value);
    miInput.value = 'home round 🐹';
}
//3. eventos
miInput.addEventListener('click',cambiarValue)

//ejercicio cuadro de colores

//1. variables

const CajaColor = document.getElementById('caja')
const botonesColores = document.querySelectorAll('.btnColores')   //pertite utilisar selecctores de css..... ¡OJO SIEMPRE PONER UN PUNTO (.) ESTO ES POR QUE SI NO LO TIENE NO PUEDE COPILAR!!!!!!!!!!!!!!!!!!
// querySelectorAll y querySelector se usa para llamar diferentes clases, la diferencia es que ALL trae a muchas y la otra solo a una.
console.log(CajaColor)
console.log(botonesColores)

//2. funciones
function pintarCaja (e){
    console.log(e.target.getAttribute('data-color'));
    let newColor = e.target.getAttribute('data-color');
    CajaColor.style.backgroundColor = newColor;
}

//3.eventos
botonesColores[0].addEventListener('click', pintarCaja);
botonesColores[1].addEventListener('click', pintarCaja);
botonesColores[2].addEventListener('click', pintarCaja);
botonesColores[3].addEventListener('click', pintarCaja);


//ejercicio mover pelota 
//1. variables

const pelota = document.querySelector('#circulo');
const btnMover = document.querySelector('#btnMover');
let e = 0;
console.log(pelota)
console.log(btnMover)

//2. funciones

function mover(){

    if(e == 0){
        pelota.style.marginLeft = '400px';
        pelota.style.backgroundColor = 'blue';
        pelota.style.transitionDuration = '.5s';
        e=1;

    }
    else{
        pelota.style.marginLeft = '0px';
        pelota.style.backgroundColor = '#2e2e2e';
        pelota.style.transitionDuration = '.5s';
        e=0;

    }
}

//3. eventos
btnMover.addEventListener('click',mover);

//ejercicio cambiar imagen

const pantallaImg = document.querySelector('#miImagen');
const btnCambiar = document.querySelector('#btnCambiar');
let estado = 0;
function cambiarImagen(){
    
    pantallaImg.setAttribute('src','imagen2.jpg');
}

btnCambiar.addEventListener('click', cambiarImagen);
