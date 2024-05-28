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
const botonesColores = document.querySelectorAll('btnColores')   //pertite utilisar selecctores de css

console.log(CajaColor)
console.log(botonesColores)

//2. funciones
function pintarCaja (e){
    console.log(e.target.getAttribute('data-color'));
    let newColor = e.target.getAttribute('data-color');
    CajaColor.style.backgroundColor = newColor;
}

//3.eventos
botonesColores[0].addEventListener('click',pintarCaja);
botonesColores[1].addEventListener('click',pintarCaja);
botonesColores[2].addEventListener('click',pintarCaja);
botonesColores[3].addEventListener('click',pintarCaja);
