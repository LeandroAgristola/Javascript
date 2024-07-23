// Obtiene el boton de enviar nota por su ID
const sendButton = document.getElementById('snd-nota');

// Añade un evento de clic al boton de enviar nota
sendButton.addEventListener("click", () => {
    let resultado;
    let mensaje;

    try {
        // Obtiene el valor del input de nota y lo convierte a entero
        let prevRes = parseInt(document.getElementById('nota').value);

        // Verifica si el valor es un numero
        if (isNaN(prevRes)) {
            throw "Error: Valor Nulo";
        }

        // Llama a la funcion para verificar la aprobacion
        resultado = verificarAprobacion(8, 4, prevRes);

        // Define el mensaje basado en el resultado
        mensaje = definirMensaje(resultado[1]);
    } catch (e) {
        // Si hay un error, establece mensajes de error
        resultado = ["Error", "Error: Valor no admitido"];
        mensaje = "Advertencia: Procedimiento no admitido";
    }

    // Abre el modal con el resultado y el mensaje
    abrirModal(resultado[1], mensaje);
});

// Funcion para definir el mensaje basado en la nota
const definirMensaje = (pr) => {
    let resultado;
    switch (pr) {
        case 1:
            resultado = "Nota demasiado baja";
            break;
        case 2:
            resultado = "Nota muy baja";
            break;
        case 3:
            resultado = "Nota baja";
            break;
        case 4:
            resultado = "Nota insuficiente";
            break;
        case 5:
            resultado = "Nota insuficiente";
            break;
        case 6:
            resultado = "Nota aprobado con el minimo";
            break;
        case 7:
            resultado = "Nota aprobado";
            break;
        case 8:
            resultado = "Nota bien";
            break;
        case 9:
            resultado = "Nota muy bien";
            break;
        case 10:
            resultado = "Nota muy excelente";
            break;
        default:
            resultado = "Nota no valida";
    }
    return resultado;
}

// Funcion para verificar la aprobacion basado en las notas
const verificarAprobacion = (nota1, nota2, prevRes) => {
    let promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7) {
        return ["APROBADO", "<span class='green'>APROBADO</span>"];
    }
    return ["DESAPROBADO", "<span class='red'>DESAPROBADO</span>"];
}

// Funcion para abrir el modal con el resultado y el mensaje
const abrirModal = (res, msg) => {
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu examen: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}
