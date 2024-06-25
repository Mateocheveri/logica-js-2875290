/* variables */
var img = document.getElementsByTagName("img")[0];
var btn = document.getElementsByClassName("btn");
var txt1 = document.getElementsByTagName("h1")[0];

/* funciones */
function cambio1 (){
  img.setAttribute("src", "inicio.jpg");
  txt1.innerHTML = "INICIO";
}
function cambio2 (){
  img.setAttribute("src", "registrar.jpg");
  txt1.innerHTML = "REGISTRO";
}
function cambio3 (){
  img.setAttribute("src", "quienes-somos.jpg");
  txt1.innerHTML = "QUIENES SOMOS";
}
function cambio4 (){
  img.setAttribute("src", "guion.jpg");
  txt1.innerHTML = "GUIONES";
}
function cambio5 (){
  img.setAttribute("src", "guiones-quiz.jpg");
  txt1.innerHTML = "GUIONES QUIZ";
}
function cambio6 (){
  img.setAttribute("src", "ediction.jpg");
  txt1.innerHTML = "EDICION";
}
function cambio7 (){
  img.setAttribute("src", "edicion-quiz.jpg");
  txt1.innerHTML = "EDICION QUIZ";
}
function cambio8 (){
  img.setAttribute("src", "direcc.jpg");
  txt1.innerHTML = "DIRECCION";
}
function cambio9 (){
  img.setAttribute("src", "direccion-quiz.jpg");
  txt1.innerHTML = "DIRECCION QUIZ";
}
function cambio10 (){
  img.setAttribute("src", "fotografi.jpg");
  txt1.innerHTML = "FOTOGRAFIA";
}
function cambio11 (){
  img.setAttribute("src", "donidos.jpg");
  txt1.innerHTML = "SONIDO";
}
function cambio12 (){
  img.setAttribute("src", "sonido-quiz.jpg");
  txt1.innerHTML = "SONIDO QUIZ";
}
/* evento */
btn[0].addEventListener("click", cambio1);
btn[1].addEventListener("click", cambio2);
btn[2].addEventListener("click", cambio3);
btn[3].addEventListener("click", cambio4);
btn[4].addEventListener("click", cambio5);
btn[5].addEventListener("click", cambio6);
btn[6].addEventListener("click", cambio7);
btn[7].addEventListener("click", cambio8);
btn[8].addEventListener("click", cambio9);
btn[9].addEventListener("click", cambio10);
btn[10].addEventListener("click", cambio11);
btn[11].addEventListener("click", cambio12);