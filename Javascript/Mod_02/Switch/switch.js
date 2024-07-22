let expr = "Manzana";

switch(expr){
    case "Banana":
        console.log("esta fruta es amarilla");
        break;
    case "Pera":
        console.log("tiene forma de mi tio roberto");
        break;
    case "Manzana":
        console.log("los primeros humanos pecaron comiendola");
        break;
}

//La sentencia switch compara el valor de expr con cada uno de los valores especificados en los casos (case).
//Cuando encuentra un caso que coincide (case "Manzana": en este ejemplo), ejecuta el bloque de código asociado a ese caso.
//El break después de cada caso evita que el programa continúe ejecutando el resto de los casos. Si no se incluye break, 
//el switch ejecutará el siguiente caso también, lo cual se conoce como "fallthrough".


//La variable expr tiene el valor "Manzana".
//El switch compara expr con "Banana", "Pera" y "Manzana".
//Cuando encuentra la coincidencia con "Manzana", ejecuta console.log("los primeros humanos pecaron comiendola") y luego sale del switch debido al break.

//Para analizar cosas muy complejas (menor rendimiento)

//Probamos git
