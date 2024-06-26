/* variables */
var img = document.getElementsByTagName("img")[0];  /* SE LLAMA EL ELEMENTO IMG DE HTML */
var btn = document.getElementsByClassName("btn");   /* LOS BOTONES QUE HACEN EL CAMBIO */
var txt1 = document.getElementsByTagName("h1")[0];  /* EL TITULO  */

/* funciones */
function cambio1 (){
  img.setAttribute("src", "inicio.jpg");/* se llama a la imagen para que SALGA EN LA PANTALLA */
  txt1.innerHTML = "INICIO";   /* ESTO SE HACE PARA LLAMAR  EL TEXTO Y SE CAMBIE CON CADA BOTON QUE TENGA EL HTML */
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
btn[0].addEventListener("click", cambio1); /*AL DARLE CLIC SE  MODIFIARA EL TEXTO Y LA IMAGEN, CON CADA UNO DE LOS EVENTOS*/
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




/* sustentacion */

/* 
la primera interaccion es en el inicio, son las targetas seleccionables con efecto hover se mostrara un texto relacionado relacionado a esa tarjeta,
con estos pasos se puede hacer:

1:variable.
const box = document.querySelector(".box")   (se llaman las clases que tienen las targetas tanto el texto como las imagenes)
const text = document.querySelector(".text")
const icon = document.querySelector(".img")

2:funciones

function boxel(){
pular la lista de clases.)
 textt.classlist. boxl.classlist.toggle('boxselected') (el classlist es es una propiedad de solo lectura que devuelve una colección DOMTokenList activa de los atributos de clase del elemento. Esto luego se puede usar para manitoggle(".box")
 icon.clssList.toggle
}

3: el evento
box.addEventListener("click", box_selected1) (al darle clic a la card resaltara el texto oculto dentro de las tarjetas)
*/

/* los botones tiene un efecto que muestra el texto, esto es ya que al darle clck a el voton "ver mas"  
resaltara una ventana con la informacion deseada 
*/
/* 
con estos pasos se podra hacer:
llamamos las variables que seria la ventana con el texto emergente y el bootn

const btn = document.getElement('.btn');
const texto = document.getelement('texin');
let e = 0;

//2.Funciones
function botontex(e){
  "en la funcion tendra una animacion de salida de .5s y condicionales esto es ya que al darle a el boton se abrira y se cerrara el texto"
  texto.classList.toggle('show')

  if(text.classList.contains('show')){
    text.style.marginLeft = '400px';
    text.innerhtml = 'informacion '
    pelota.style.transitionDuration = '.5s';
    e=1;
  }
  else{
    pelota.style.marginLeft = '0px';
    btn.innerhtml = 'closed'
    pelota.style.transitionDuration = '.5s';
    e=0;
  }
}

3: el evento
btn.addEventListener("click", botontext)
 (al darle clic a el btn resaltara saldra el texto y al volverle a dar a el botno se ocultara el texto)

*/