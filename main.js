//CONSTRUCTOR DE OBJETOS
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = Number (precio);
    }
    mensaje(){
        alert("Seleccione un producto de la lista" + this.nombre +" " + this.precio);
    }
}

//CREO OBJETOS
const PRODUCTO_1 = new Producto ("EMPANADA", "10");
const PRODUCTO_2 = new Producto ("HAMBURGUESA", "15"); 
const PRODUCTO_3 = new Producto ("MILANESA", "20");
const PRODUCTO_4 = new Producto ("REFRESCO", "5");

//CREO ARRAY DE PRODUCTOS
const productos = [
    PRODUCTO_1,
    PRODUCTO_2,
    PRODUCTO_3,
    PRODUCTO_4
];

//CREO ARRAY DE CARRITO
let carrito = [];

const TIPO_MONEDA = "USD";

let pregunta = prompt("Bienvenido a Fast Food, desea realizar una compra Si(S) No (N)");
let cantidad;
let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + " " + TIPO_MONEDA);

//EVALUANDO DIFERENTES CONDICIONES
while (pregunta.toUpperCase() != "S" && pregunta.toUpperCase() != "N"){
    alert("Favor ingrese una respuesta correcta, S / N");
    pregunta = prompt("Bienvenido a Fast Food, desea realizar una compra Si (S) No (N)");
}

if (pregunta.toUpperCase() == "S"){    
    alert("Bienvenido a Fast Food \n" + "A continuación la lista de productos");
}else if(pregunta.toUpperCase() == "N"){
    alert("Gracias por visitarnos, nos vemos en la próxima!");
}

while (pregunta.toUpperCase() != "N"){
    let producto = prompt ("Seleccione un producto: \n" + "Lista de Insumos y Precios: \n\n" + todosLosProductos.join("\n"));
    let precio = 0;
    if (validarProducto(producto)){    
        let productoSeleccionado = productos.find((p) => p.nombre.toUpperCase() === producto.toUpperCase());
        precio = productoSeleccionado.precio;
        // PIDE LA CANTIDAD //
        do {
            cantidad = parseInt (prompt ("Ingrese la cantidad: "));
            //AGREGO PRODUCTO AL CARRITO
            carrito.push({
                producto, 
                cantidad, 
                precio
            });
        console.log(carrito);
        }
        while ((isNaN (cantidad)) || (cantidad == "") || (cantidad == 0));
    }else {
        do{
            alert ("Ingrese un producto correcto");
            producto = prompt ("Seleccione un producto: \n" + "Lista de Insumos y Precios: \n\n" + todosLosProductos.join("\n"));
        }
        while (validarProducto(producto));       
    }
    //EVALUA CONDICION, DE SER NO MUESTRA LO QUE HAY EN EL CARRITO 
    pregunta = prompt("Desea seguir comprando? (S / N)");
    while (pregunta.toUpperCase() == "N"){
        alert("Gracias por su compra.");
        carrito.forEach((carritoFinal)=>{
        console.log (`Producto: ${carritoFinal.producto}, Cantidad: ${carritoFinal.cantidad}, Total a pagar por producto: ${carritoFinal.cantidad * carritoFinal.precio}`)
        });
    break; 
    }
}

// FUNCIONES //
const totalCompra = carrito.reduce((a, b) => a + b.cantidad * b.precio, 0);
alert (`El total a pagar por su compra es: ${totalCompra}`);

function validarProducto(producto) {
    const productosValidos = ["EMPANADA", "HAMBURGUESA", "MILANESA", "REFRESCO"];
    return productosValidos.includes(producto.toUpperCase());
}

function mensaje(producto){
    alert("Usted ha escogido" + " " + producto);
}