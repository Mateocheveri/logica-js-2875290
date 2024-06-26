//1.Variables
const btnNumeros = document.querySelectorAll('.min');
const flotante = document.querySelector('#flotante');
const cuadroOpacidad = document.querySelector('#cuadro');
const equis = document.querySelector('#equis');
const btnSiguiente = document.querySelector('#sig');
const btnAnterior = document.querySelector('#ant');
const imgprincipal = document.querySelector('#imgprincipal');
let e = 0;

//2.Funciones
function lightbox (e){
    //console.log(e.target.src)
    let currentImg = e.target.src;
    flotante.style.top = '0vh';
    flotante.style.transitionDuration = '.5s';
    imgprincipal.setAttribute('src',currentImg);
}

function cerrar (){
    flotante.style.top = '-100vh';
    flotante.style.transitionDuration = '.5s';
}
/* 
function nextImage() {
    e = (e + 1) % btnNumeros.length;
    let nextImgSrc = btnNumeros[e].src;
    imgprincipal.setAttribute('src', nextImgSrc);
}

function previous() {
    e = (e - 1 + btnNumeros.length) % btnNumeros.length;
    let prevImgSrc = btnNumeros[e].src;
    imgprincipal.setAttribute('src', prevImgSrc);
} */

function Siguiente(){
    imgprincipal.src ="img2.jpg"
    imgprincipal.setAttribute('src', "img2.jpg")
}
function anterior(){
    imgprincipal.src="img1.jpg"
} 
//3.Eventos
btnNumeros[0].addEventListener('click', lightbox);
btnNumeros[1].addEventListener('click', lightbox);
equis.addEventListener('click', cerrar);
cuadroOpacidad.addEventListener('click', cerrar);

btnSiguiente.addEventListener('click', Siguiente);
btnAnterior.addEventListener('click', anterior); 


