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































    //pasos para generar captcha//
    let longitud = 6;
    let parrafoCaptcha = document.getElementById("generador-captcha");
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'; //caracteres posibles del captcha
    let captcha = '';
    


    //generar captcha
    for(let i = 0; i < longitud; i++){
        //Elige un caracter random en base al Math.random()//
        let caracterRandom = Math.floor(Math.random()* caracteres.length);
        captcha += caracteres.charAt(caracterRandom);
    }
    parrafoCaptcha.innerHTML = captcha;    

    //validar captcha

    let form = document.getElementById("form");
    form.addEventListener("submit", validarCaptcha);

    function validarCaptcha(eventoFormulario){
        eventoFormulario.preventDefault();
        // Evita el envío del formulario 
        let captchaUsuario = document.getElementById("captcha-usuario");
        let mensaje = document.getElementById("mensaje-validacion");
        let nombre = document.getElementById("nombre");
        let email = document.getElementById("email");
        let contraseña = document.getElementById("contraseña");
        let mensajeTextArea = document.getElementById("mensaje");
        let linkCreaTuPersonaje = document.getElementById("crea_tu_personaje");
    
        if(captchaUsuario.value === captcha){
            mensaje.innerHTML = "Registrado correctamente";
            linkCreaTuPersonaje.classList.remove("ocultar2");
            nombre.value = "";
            email.value = "";
            contraseña.value = "";
        }
        else{
            mensaje.innerHTML = "Tú no puedes pasar aquí, ¡eres un orco!";
            linkCreaTuPersonaje.classList.add("ocultar2");
        }
    }
    

}

