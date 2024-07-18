// Definimos un array de objetos que contiene los datos de los alumnos
let alumnos = [{
    nombre: "Carlos Aguirre",
    email: "caguirre@gmail.com",
    materia: "Fisica III"
}, {
    nombre: "Estaban Quito",
    email: "equito@gmail.com",
    materia: "Matematicas II"
}, {
    nombre: "Irina Gonzale",
    email: "igonzalez.com",
    materia: "Algebra I"
}, {
    nombre: "Lorenzo Chinchilla",
    email: "lchinchilla@gmail.com",
    materia: "Quimica II"
}];

// Seleccionamos el botón de confirmación en el DOM
const boton = document.querySelector(".boton-confirmar");

// Seleccionamos el contenedor de la cuadrícula en el DOM
const contenedor = document.querySelector(".grid-container");

// Iteramos sobre cada alumno en el array `alumnos`
for (let alumno of alumnos) {
    // Extraemos las propiedades de cada alumno
    let nombre = alumno.nombre;
    let email = alumno.email;
    let materia = alumno.materia;

    // Creamos un fragmento de HTML con los datos del alumno y una lista desplegable para seleccionar la semana
    let htmlCodo = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;

    // Añadimos el fragmento de HTML al contenedor de la cuadrícula
    contenedor.innerHTML += htmlCodo;
}

// Añadimos un evento al botón para que se ejecute cuando se haga clic en él
boton.addEventListener("click", () => {
    // Mostramos un cuadro de confirmación y guardamos el resultado (true si se confirma, false si se cancela)
    let confirmar = confirm("¿Realmente quieres confirmar?");
    if (confirmar) { // Si se confirma
        // Eliminamos el botón del DOM
        document.body.removeChild(boton);

        // Seleccionamos todos los elementos que contienen la semana
        let elementos = document.querySelectorAll(".semana");

        // Seleccionamos todos los elementos de las listas desplegables
        let semanasElegidas = document.querySelectorAll(".semana-elegida");

        // Iteramos sobre los elementos seleccionados y actualizamos el contenido de cada uno con el valor seleccionado en la lista desplegable
        elementos.forEach((elemento, index) => {
            elemento.innerHTML = semanasElegidas[index].value;
        });
    }
});