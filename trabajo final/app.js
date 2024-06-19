
var img = document.getElementsByTagName("img")[0];
var btn = document.getElementsByClassName("btn");
var txt1 = document.getElementsByTagName("h1")[0];
var txt2 = document.getElementsByTagName("p")[0];

function cambio1 (){
    img.setAttribute("src", "inicio con correcciones.jpg");
    txt1.innerHTML = "imagen 1";
    txt2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
function cambio2 (){
    img.setAttribute("src", "img2.jpg");
    txt1.innerHTML = "imagen 2";
    txt2.innerHTML = "mondongo"
}
function cambio3 (){
    img.setAttribute("src", "img3.jpg");
    txt1.innerHTML = "imagen 3";
    txt2.innerHTML = "floor marina"
}

btn[0].addEventListener("click", cambio1);
btn[1].addEventListener("click", cambio2);
btn[2].addEventListener("click", cambio3);
