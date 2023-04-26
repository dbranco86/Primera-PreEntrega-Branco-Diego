//EJERCICIO PARA LA PRE ENTREGA

const PRODUCTO_1 = "EMPANADA";
const PRODUCTO_2 = "HAMBURGUESA";
const PRODUCTO_3 = "MILANESA";
const PRODUCTO_4 = "REFRESCO"
const TIPO_MONEDA = "USD"

alert("Bienvenido a Fast Food \n" + "Lista de Insumos y Precios: \n\n" + PRODUCTO_1 + " " + "-" + " " + "10" + TIPO_MONEDA + "\n" + PRODUCTO_2 + " " + "-" + " " + "15" + TIPO_MONEDA + "\n" + PRODUCTO_3 + " " + "-" + " " + "20" + TIPO_MONEDA + " " + "\n" + PRODUCTO_4 + " " + "-" + " " + "5" + TIPO_MONEDA);

let seleccion = prompt ("Seleccione un producto de la lista: \n\n" + PRODUCTO_1 + "\n" + PRODUCTO_2 + "\n" + PRODUCTO_3 + "\n" + PRODUCTO_4);
let precioProducto;
let confirmar;
let cantidad;

// COMPRUEBA  EL INGRESO DE DATOS //
while (seleccion == ""){
   alert("Debe ingresar un producto");
   seleccion = prompt ("Seleccione un producto de la lista: \n\n" + PRODUCTO_1 + "\n" + PRODUCTO_2 + "\n" + PRODUCTO_3 + "\n" + PRODUCTO_4);
}

while ((seleccion.toUpperCase() != PRODUCTO_1) && (seleccion.toUpperCase() != PRODUCTO_2) && (seleccion.toUpperCase() != PRODUCTO_3) && (seleccion.toUpperCase() != PRODUCTO_4)) {
   alert("Debe ingresar un producto correcto");
   seleccion = prompt ("Seleccione un producto de la lista: \n\n" + PRODUCTO_1 + "\n" + PRODUCTO_2 + "\n" + PRODUCTO_3 + "\n" + PRODUCTO_4);
}

// EVALUA LA CONDICION //
if (seleccion.toUpperCase() == PRODUCTO_1){
   mensaje(seleccion.toUpperCase());
   precioProducto = 10;
}else if (seleccion.toUpperCase() == PRODUCTO_2){
   mensaje(seleccion.toUpperCase());
   precioProducto = 15;
}else if (seleccion.toUpperCase() == PRODUCTO_3){
   mensaje(seleccion.toUpperCase());
   precioProducto = 20;
}else {
   mensaje(seleccion.toUpperCase());
   precioProducto = 5;
}

// PIDE LA CANTIDAD //
do {
   cantidad = Number (prompt ("Ingrese la cantidad: "));
}
while (isNaN (cantidad));

// COMPRUEBA LA CANTIDAD INGRESADA //
while ((cantidad == "") || (cantidad == 0)){
   alert("Debe ingresar una cantidad");
   cantidad = prompt ("Ingrese la cantidad: ");
}

alert ("Su pedido es: \n\n" + "Cantidad:" + " " + cantidad + "\n" + "Producto:" + " " + seleccion.toUpperCase());
confirmar = prompt("Favor confirme su compra:" + "\n\n" + "Para continuar presione: ( S )" + "\n" + "Para salir presione: ( N )");

// COMPRUEBA EL INGRESO DE DATOS //
while ((confirmar.toUpperCase() != "S") && (confirmar.toUpperCase() != "N")) {
   alert("Debe ingresar una opción correcta");
   confirmar = prompt("Favor confirme su compra:" + "\n\n" + "Para continuar presione: ( S )" + "\n" + "Para salir presione: ( N )");
}

// CONFIRMAR COMPRA //
if (confirmar.toUpperCase() == "S"){
   let resultado = precioFinal(cantidad, precioProducto);
   alert ("Su orden es: \n" + "\n" + "Producto: " + seleccion.toUpperCase() + "\n" + "Cantidad: " + cantidad + "\n" + "Total a pagar: " + resultado + TIPO_MONEDA);
   alert ("Gracias por su compra!");
}else if (confirmar.toUpperCase() == "N") {
   alert ("Gracias por su visita!");
}

// FUNCIONES //
function mensaje(seleccion){
   alert ("Usted ha escogido" + " " + seleccion);
}

function precioFinal (cantidad, precioProducto){
   return cantidad * precioProducto;
}




