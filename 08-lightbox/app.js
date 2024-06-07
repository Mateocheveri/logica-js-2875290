//1.Variables
const btnNumeros = document.querySelectorAll('.min');
const flotante = document.querySelector('#flotante');
const cuadroOpacidad = document.querySelector('#cuadro');
const equis = document.querySelector('#equis');
const btnSiguiente = document.querySelector('#sig');
const btnAnterior = document.querySelector('#ant');
const imgprincipal = document.querySelector('#imgprincipal');
let i = 0;

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


function nextImage() {
    e = (e + 1) % btnNumeros.length;
    let nextImgSrc = btnNumeros[e].src;
    imgprincipal.setAttribute('src', nextImgSrc);
}


function previous() {
    e = (e - 1 + btnNumeros.length) % btnNumeros.length;
    let prevImgSrc = btnNumeros[e].src;
    imgprincipal.setAttribute('src', prevImgSrc);
}

//3.Eventos
btnNumeros[0].addEventListener('click', lightbox);
btnNumeros[1].addEventListener('click', lightbox);
equis.addEventListener('click', cerrar);
cuadroOpacidad.addEventListener('click', cerrar);

btnSiguiente.addEventListener('click', nextImage);
btnAnterior.addEventListener('click', previous); 

/* 
function lightbox(e) {
    let currentImg = e.target.src;
    flotante.style.top = '0vh';
    flotante.style.transitionDuration = '.5s';
    imgprincipal.setAttribute('src', currentImg);
}

function cerrar() {
    flotante.style.top = '-100vh';
    flotante.style.transitionDuration = '.5s';
}


function nextImage() {
    e++;
    if (e < btnNumeros.length) {
        let nextImgSrc = btnNumeros[e].src;
        imgprincipal.setAttribute('src', nextImgSrc);
    } else {
       
        btnSiguiente.disabled = true;
    }
  
    btnAnterior.disabled = false;
}


function previous() {
    e--;
    if (e >= 0) {
        let prevImgSrc = btnNumeros[e].src;
        imgprincipal.setAttribute('src', prevImgSrc);
    } else {
      
        btnAnterior.disabled = true;
    }
    btnSiguiente.disabled = false;
}

// 3.Eventos
btnNumeros[0].addEventListener('click', lightbox);
btnNumeros[1].addEventListener('click', lightbox);
equis.addEventListener('click', cerrar);
cuadroOpacidad.addEventListener('click', cerrar);
btnSiguiente.addEventListener('click', nextImage);
btnAnterior.addEventListener('click', previous); */
