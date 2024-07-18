let cantidad = prompt("cuantos alumnnos son?"); //solicitamos ingreso de datos que se guardan en la variable "cantidad"
let alumnosTotales = []; //creamos aun array sin ponerle balores []

/* carga de nombres de los alumnos */
for (i = 0; i < cantidad; i++) { //i representa la posicion y repetimos cuando la posicion es menor a la cantidad
    alumnosTotales [i] = [prompt("nombre del alumno " + (i+1)),0]; // cargamos el nombre del alumno en la posicion "i" y le cargamos "0" asistencias

}

/* creamos la funcion para tomar asistencia*/ 
const tomarAsistencia = (nombre,p)=>{ // toma dos parametros, nombre y p
    let presencia = prompt(nombre); // la variab
    if (presencia == "p" || presencia == "P" ) { //comprobamos si la condicion de presente se cumple "p" mayuscula o minuscula
        alumnosTotales[p][1]++; //seleccionamos un elemento del array (p) y un elemento del otro array (1) y luego incrementamos a la otra posicion
    }    
}

/*ejecutamos la funcion 30 veces */
for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales) { 
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
              Presentes: ${alumnosTotales[alumno][1]} <br>
              Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    if (30 - alumnosTotales[alumno][1] > 18 ) {
    resultado += "Reprobado por Inasistencia <br><br>";
    } else {
    resultado += "<br><br>"
    }
    document.write(resultado);
}
