// Selecciona el elemento HTML con la clase "flex-container" y lo guarda en la variable "contenedor"
const contenedor = document.querySelector(".flex-container");

// Función para crear un producto con su imagen, nombre, modelo y precio
function crearProducto(nombre, modelo, precio) {
    // Define la imagen del producto
    img = "<img class='producto-img' src='producto.png'>";
    // Define el nombre del producto dentro de un elemento <h2>
    nombre = `<h2>${nombre}</h2>`;
    // Define el modelo del producto dentro de un elemento <h3>
    modelo = `<h3>${modelo}</h3>`;
    // Define el precio del producto dentro de un elemento <p>
    precio = `<p>Precio: <b>$ ${precio}</b></p>`;
    // Retorna un array con los elementos HTML del producto
    return [img, nombre, modelo, precio];
}

// Crea un fragmento de documento para contener los nuevos elementos de productos
let documentFragment = document.createDocumentFragment();

// Bucle para crear 20 productos
for (var i = 1; i <= 20; i++) {
    // Genera un número aleatorio para el modelo del producto
    let modeloRandom = Math.round(Math.random() * 1000000 + 30);
    // Genera un precio aleatorio para el producto
    let precioRandom = Math.round(Math.random() * 15000 + 30);
    // Llama a la función crearProducto y guarda el resultado en la variable "producto"
    let producto = crearProducto(`Producto ${i}`, `modelo ${modeloRandom}`, precioRandom);
    // Crea un nuevo elemento <div>
    let div = document.createElement("DIV");
    // Agrega un evento click al <div> que actualiza el valor de un campo con clase "product-data"
    div.addEventListener("click", () => {
        document.querySelector(".product-data").value = modeloRandom;
    });
    // Establece el tabIndex del <div> para la navegación por teclado
    div.tabIndex = i;
    // Agrega clases al <div> para estilos CSS
    div.classList.add(`item-${i}`, 'flex-item');
    // Define el contenido HTML del <div> combinando los elementos del array "producto"
    div.innerHTML = producto[0] + producto[1] + producto[2] + producto[3];
    // Añade el <div> al fragmento del documento
    documentFragment.appendChild(div);
}

// Añade el fragmento del documento con todos los productos al contenedor
contenedor.appendChild(documentFragment);