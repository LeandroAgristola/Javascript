
// Obtener elementos del DOM: 
//      Se utilizan para capturar los elementos del DOM (Document Object Model) que se van a manipular.
const nombre = document.getElementById("nombre");
const email = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

// Agregar evento al botón:
//      e.preventDefault() evita que el formulario se envíe automáticamente.
//      Se llama a la función validarCampos para verificar la validez de los datos ingresados.
//      Dependiendo del resultado de la validación, se muestra un mensaje de error o de éxito en el elemento resultado.

boton.addEventListener('click', (e) => { //"e" se refiere al evento
    e.preventDefault(); // Prevenir el envío del formulario para validar los campos primero
    let error = validarCampos(); // Llamar a la función de validación
    if (error[0]) { // Si hay un error, mostrar el mensaje de error
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
        resultado.classList.remove("green");
    } else { // Si no hay error, mostrar mensaje de éxito
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
});


// Agregar evento al botón:
//      e.preventDefault() evita que el formulario se envíe automáticamente.
//      Se llama a la función validarCampos para verificar la validez de los datos ingresados.
//      Dependiendo del resultado de la validación, se muestra un mensaje de error o de éxito en el elemento resultado.

const validarCampos = () => {
    let error = []; // Array para almacenar los errores
    // Validar el campo nombre
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es inválido";
        return error;
    }
    // Validar el campo email
    else if (email.value.length < 5 ||
        email.value.length > 40 ||
        !email.value.includes("@") || // Verificar que el email contenga "@"
        !email.value.includes(".")) { // Verificar que el email contenga "."
        error[0] = true;
        error[1] = "El email es inválido";
        return error;
    }
    // Validar el campo materia
    else if (materia.value.length < 4 || materia.value.length > 40) {
        error[0] = true;
        error[1] = "La materia no existe";
        return error;
    }
    
    error[0] = false; // Si no hay errores, establecer el primer elemento del array error en false
    return error; // Devolver el array error
}



