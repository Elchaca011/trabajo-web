"use strict"
document.addEventListener("DOMContentLoaded", main);
function main(){
    
    //Tabla dinamica

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
            "clase": "mago",
            "arma": "baston magico y espada",
            "habilidades": "lanzar hechizos y llamar a animales salvajes",
            "descripcion": "es un istari enviado a la tierra media pra luchar contra la oscuridad.",
        }
    ];

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
    }
    
    //Mostrar x3

    let btn_x3 = document.querySelector("#x3");
    btn_x3.addEventListener("click", agregarPersonajeX3);

    function agregarPersonajeX3(){
        agregarPersonaje();
        agregarPersonaje();
        agregarPersonaje();
    }

    //se muestra tabla

    let mostrar_tabla = document.getElementById("btn-mostrar-tabla");
    mostrar_tabla.addEventListener("click", mostrarTabla);

    function mostrarTabla(){
        let div_tabla_personaje = document.querySelector(".tabla-crear-personaje");
        div_tabla_personaje.classList.toggle("ocultar");

        let tabla = document.querySelector("#tabla-personaje tbody");

        tabla.innerHTML= "";

        for(let i = 0; i < personajes_creados.length; i++){    
            tabla.innerHTML += `<tr>
                                    <td> ${personajes_creados[i].nombre} </td>
                                    <td> ${personajes_creados[i].clase} </td>
                                    <td> ${personajes_creados[i].arma} </td>
                                    <td> ${personajes_creados[i].habilidades} </td>
                                    <td> ${personajes_creados[i].descripcion} </td>
                                </tr>`;
            
        }
        
    }
}