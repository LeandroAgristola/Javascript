 // Función para obtener información de las materias y alumnos
 const obtenerInformacion = (materia = null) => {
    // Diccionario con materias y sus respectivos alumnos
    const materias = {
        Fisica: ["Prof: Perez", "Pedro", "Maria", "Esteban", "Marcelo", "Ricardo", "Carla"],
        Quimica: ["Prof: Ramirez", "Pedro", "Maria", "Esteban", "Marcelo", "Ricardo", "Carla"],
        Matematicas: ["Prof: Fernandez", "Pedro", "Maria", "Esteban", "Marcelo", "Ricardo", "Carla"],
        Logica: ["Prof: Rodriguez", "Pedro", "Maria", "Esteban", "Marcelo", "Ricardo", "Carla"],
    };

    // Si se proporciona una materia y existe en el diccionario, devuelve la información de esa materia
    if (materia !== null && materias[materia] !== undefined) { 
        return [materias[materia], materia, materias];
    } else {
        // Si no se proporciona una materia específica, devuelve todas las materias
        return materias;
    }
};

// Función para mostrar la información de una materia específica
const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia); // Obtiene la información de la materia
    if (informacion !== false) { // Verifica si la materia existe
        let profesor = informacion[0][0]; // Obtiene el nombre del profesor
        let alumnos = informacion[0].slice(1); // Obtiene los nombres de los alumnos
        // Escribe la información en el documento HTML
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b>${profesor}</b><br>
            Los alumnos son: <b>${alumnos.join(", ")}</b><br><br>`);
    }
}

// Función para contar en cuántas materias está inscrito un alumno
const cantidadDeClase = (alumno) => {
    let materias = obtenerInformacion(); // Obtiene todas las materias
    let cantidadTotal = 0; // Inicializa el contador de materias
    let materiasInscrito = []; // Lista para almacenar las materias en las que está inscrito el alumno

    // Itera sobre cada materia en el diccionario
    for (let materia in materias) {
        if (materias[materia].includes(alumno)) { // Verifica si el alumno está inscrito en la materia
            cantidadTotal++; // Incrementa el contador
            materiasInscrito.push(materia); // Agrega la materia a la lista
        }
    }

    // Escribe la información en el documento HTML
    document.write(`<b>${alumno}</b> está inscrito en <b>${cantidadTotal}</b> materias: <b>${materiasInscrito.join(", ")}</b><br>`);
}

 // Función para inscribirse en una materia si tiene menos de 20 alumnos
const inscribirAlumno = (materia, alumno) => {
    let informacion = obtenerInformacion(materia); // Obtiene la información de la materia
    if (informacion !== false) { // Verifica si la materia existe
        let alumnos = informacion[0].slice(1); // Obtiene los nombres de los alumnos
        if (alumnos.length < 20) { // Verifica si hay menos de 20 alumnos inscritos
            informacion[0].push(alumno); // Inscribe al alumno
            document.write(`<b>${alumno}</b> se ha inscrito en <b>${materia}</b>.<br>`); // Muestra mensaje de inscripción exitosa
        } else {
            document.write(`No se puede inscribir a <b>${alumno}</b> en <b>${materia}</b> porque ya tiene 20 alumnos.<br>`); // Muestra mensaje de error
        }
    }
}

// Llamamos a la función para mostrar la información de cada materia
mostrarInformacion("Fisica"); // Muestra la información de Física
mostrarInformacion("Quimica"); // Muestra la información de Química
mostrarInformacion("Matematicas"); // Muestra la información de Matemáticas
mostrarInformacion("Logica"); // Muestra la información de Lógica

// Mostrar en qué materias está inscrito Pedro
cantidadDeClase("Pedro"); // Cuenta y muestra en qué materias está inscrito Pedro

inscribirAlumno("Fisica", "Juan"); // Intenta inscribir a Juan en Física