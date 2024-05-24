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


/* let p ={

    style: {
        color: 'rojo',
        fontSize: '3em',
    }
    innerText: 'holamundo'
    onclick: ''funcion

}

p.style.color = 'blue'; */