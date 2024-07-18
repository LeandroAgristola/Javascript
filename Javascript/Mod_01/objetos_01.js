
//poformismo
//Capacidad para tomar diferentes formas según el contexto, 
//permitiendo que una misma operación actúe de manera distinta sobre diferentes tipos de objetos.

class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInfo(){
        document.write(this.info + "<br>")
    }
}

//Herencia de clases:
//es un mecanismo que permite a una clase derivada heredar propiedades y métodos de una clase base, 
//facilitando la reutilización y extensión de código.

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = null;
    }
    ladrar(){
        alert("Wau")
    }
    // Set para modificar una propiedad
    set setRaza(newName){ // Establecemos el metodo pero se interpreta como una propiedad
        this.raza = newName;
    }
    // get para obtener informacion
    get getRaza(){
        return this.raza;
    }
}







const perro = new Perro("perro",5,"marron","doberman"); //definir como constante para evitar errores 
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde"); 

perro.setRaza = "Pedro"; //establecemos mediante el metodo set la raza
document.write(perro.getRaza)