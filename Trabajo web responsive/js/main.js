"use strict"

document.addEventListener("DOMContentLoaded", main);
function main(){
//Menu responsive
    let btnMenu = document.querySelector(".boton-menu img");
    let divMenu = document.querySelector(".menu");

    btnMenu.addEventListener("click", mostrarMenu);

    function mostrarMenu(){
        console.log("HOLA")
        divMenu.classList.toggle("ocultar");
    }
}

