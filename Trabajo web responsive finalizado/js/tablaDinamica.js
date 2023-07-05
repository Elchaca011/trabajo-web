"use strict"
document.addEventListener("DOMContentLoaded", main);
function main(){
    
    // Arreglo con objeto json

    let personajes_creados =[
        {
            "nombre": "alduin",
            "clase": "hombre",
            "arma": "escudo y espada",
            "habilidades": "lanzar hechizos",
            "descripcion": "guerrero de la antigua raza de los dunedain con extraordinarias habilidades en la magia, en busca de la gloria.",
        },

        {
            "nombre": "robles el verde",
            "clase": "mago",
            "arma": "baston magico y daga",
            "habilidades": "naturaleza a su merced",
            "descripcion": "Un istari",
        },

        {
            "nombre":"radagast",
            "clase": "elfo",
            "arma": "baston magico y espada",
            "habilidades": "lanzar hechizos y llamar a animales salvajes",
            "descripcion": "es un istari enviado a la tierra media pra luchar contra la oscuridad.",
        }
    ];


    //mostrar por consola el arreglo con los personajes
    for(let i = 0; i < personajes_creados.length; i++){
            console.log(personajes_creados[i]);
    }


    //evitar envio de formulario
    let form = document.getElementById("form")
    form.addEventListener("click", function(e){
        e.preventDefault();
    })

    //Insertar un nuevo personaje
    let btn_aniadir = document.querySelector("#añadir");

    btn_aniadir.addEventListener("click", agregarPersonaje);

    function agregarPersonaje(){
        let nombre_personaje = document.querySelector("#nombre").value;
        let clase = document.querySelector("#clase").value
        let armas = document.querySelector("#armas").value;
        let habilidades = document.querySelector("#habilidades").value;
        let descripcion = document.querySelector("#descripcion").value;

        let personaje_nuevo = {
            "nombre": nombre_personaje,
            "clase": clase,
            "arma": armas,
            "habilidades": habilidades,
            "descripcion": descripcion,
        }
        personajes_creados.push(personaje_nuevo);

        mostrarTabla();
    }
    
    //Mostrar x3

    let btn_x3 = document.querySelector("#x3");
    btn_x3.addEventListener("click", agregarPersonajeX3);

    //funcion que agrega 3 personajes seguidos

    function agregarPersonajeX3(){
        agregarPersonaje();
        agregarPersonaje();
        agregarPersonaje();

        mostrarTabla();
    }

    //funcion muestrar tabla

    function mostrarTabla(){
        let div_tabla_personaje = document.querySelector(".tabla-crear-personaje");
        div_tabla_personaje.classList.remove("ocultar");

        let tabla = document.querySelector("#tabla-personaje tbody");

        tabla.innerHTML= "";
        //dependiendo de la clase que eligie el usuario (mago,hobbit,hombre,enano,elfo) cambia la clase de td
        //modificando su background
        for(let i = 0; i < personajes_creados.length; i++){
                    
            let clase = "";
            if (personajes_creados[i].clase === "mago") {
                clase = "mago";
            } else if (personajes_creados[i].clase === "hobbit") {
                clase = "hobbit";
            } else if (personajes_creados[i].clase === "hombre") {
                clase = "hombre";
            } else if (personajes_creados[i].clase === "enano") {
                clase = "enano";
            } else if (personajes_creados[i].clase === "elfo") {
                clase = "elfo";
            }
            tabla.innerHTML += `<tr>
                                    <td class="${clase}">${personajes_creados[i].nombre}</td>
                                    <td class="${clase}">${personajes_creados[i].clase}</td>
                                    <td class="${clase}">${personajes_creados[i].arma}</td>
                                    <td class="${clase}">${personajes_creados[i].habilidades}</td>
                                    <td class="${clase}">${personajes_creados[i].descripcion}</td>
                                </tr>`;
                }
    }

    //se borran todos los personajes creados
    let btn_borrar = document.querySelector("#borrar");
    btn_borrar.addEventListener("click", borrar);

    function borrar(){
        
        for(let i = personajes_creados.length; i >= 4; i--){
            personajes_creados.pop();
            mostrarTabla();
        }
    }
}