//const ESPACIO = " ";
//let nombre = prompt ("Como te llamas ");
//let resultado = alert ("Hola" + ESPACIO + nombre);
//let numero = 5;

//if (numero == 7) {
    //console.log ("El número es igual a 5");
//} else {
    //console.log ("El número es diferente a 5");
//}

//let nombreUsuario = prompt ("Ingrese nombre de Usuario");

//if (nombreUsuario == ""){
   // alert("No ingresaste nombre de Usuario");
//} else {
   // alert("Tu nombre de usuario es " + nombreUsuario);
//}

//let edad = Number(prompt("Ingrese su edad "));
//const ESMAYOR = (edad >= 18);

//if (ESMAYOR){
//    alert("Usted puede ingresar al sitio web");
//}else {
//    alert("Usted no puede ingresar al sitio porque es menor de edad");
//}

//let nombreUsuario= prompt("Ingrese su nombre");
//let apellidoUsuario= prompt("Ingrese su apellido");

//if ((nombreUsuario != "") && (apellidoUsuario != "")){
//    alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario);
//}else {
 //   alert("ERROR: Falta datos !");
//}

//let numero= Number (prompt("ingrese un número"));

//if (numero < 1000) {
//    alert ("Correcto, el número ingresado es " + numero);
//}else{
   // alert("Incorrecto, el número es mayor a 1000")
//}

//for (let i=0; i<=4; i++){
    //console.log("Interación n°= " + i);
   // document.write ("Interación n°= " + i);
//}

//for(let i=1; i<=5; i++){
   // let ingresarNombre= prompt("Ingrese nombre ");
   // alert("Turno N°" + " " + i +  " " + "Nombre:" + ingresarNombre);
//}

//let entrada = prompt ("Ingrese un dato: ");

//while (entrada != "ESC"){
   // alert ("El usuario ingresó: " + entrada);
   // entrada = prompt ("Ingrese otro dato: ");
//}

//for (let i=20; i<=70; i++){
  // console.log(i);
//}

//let numero = 10;

//   while (numero <=30){
//     document.write (numero + "<br>");
//     if (numero == 20){
 //           document.write ( "se rompió la ejecución del bucle");
 //           break;
 //        }
 //     numero ++;
 //  }


//let color = ["rojo", "negro", "azul", "amarillo", "verde"];
//
//let seleccion = color[2];
//
//console.log(color[0][0]);

//let palabra = "hola" + " " + "como";
//let palabra2 = "estas";
//let palabra3 = palabra + " " + palabra2;
//
//document.write (palabra3);

//let frase = ["posiciones", "se cuentan", "Las", "array", "cero.", "a partir", "del"]; 
//
//let fraseConcatenada = (frase [2] + " " + frase [0] + " " + frase [6] + " " + frase [3] + " " + frase [1] + " " + frase [5] + " " + frase [4]);
//
//document.write (fraseConcatenada);

//let num1 = "8";
//let num2 = "5";
//let num3 = "6";
//
//let resultado = Number (num1) + Number(num2) + Number (num3);
//document.write ("el resultado de la suma es: " + resultado);

//SENTENCIA SWITCH

//let color = prompt ("Ingrese un color primario: ");

//switch (color){
 //  case "rojo":
 //  alert ("seleccionaste el color Rojo");
 //  break;
//}

//EJERCICIO PARA LA PRE ENTREGA

let producto1 = "Empanadas";
let producto2 = "Hamburguesas";
let producto3 = "Milanesas";
let producto4 = "Refresco"

let seleccion = prompt ("Bienvenido a Food Fast \n" + "Seleccione un producto de la lista: \n\n" + producto1 + "\n" + producto2 + "\n" + producto3 + "\n" + producto4);
let precioProducto;
let confirmar;

while (seleccion == ""){
   alert("Debe ingresar un producto");
   seleccion = prompt ("Seleccione un producto de la lista: \n\n" + producto1 + "\n" + producto2 + "\n" + producto3 + "\n" + producto4);
}

while ((seleccion != producto1) && (seleccion != producto2) && (seleccion != producto3) && (seleccion != producto4)) {
   alert("Debe ingresar un producto correcto");
   seleccion = prompt ("Seleccione un producto de la lista: \n\n" + producto1 + "\n" + producto2 + "\n" + producto3 + "\n" + producto4);
}

if (seleccion == producto1){
   precioProducto = 10
   alert("Usted ha escogido Empanadas");
}else if (seleccion == producto2){
   precioProducto = 15
   alert("Usted ha escogido Hamburguesas");
}else if (seleccion == producto3){
   precioProducto = 20
   alert("Usted ha escogido Milanesas");
}else if (seleccion == producto4){
   precioProducto = 5
   alert("Usted ha escogido Refresco");
}

let cantidad = Number (prompt ("Ingrese la cantidad: "));

while ((cantidad == "") || (cantidad == 0)){
   alert("Debe ingresar una cantidad");
   cantidad = prompt ("Ingrese la cantidad: ");
}

alert ("Su pedido es: \n\n" + "Cantidad:" + " " + cantidad + "\n" + "Producto:" + " " + seleccion);
confirmar = prompt("Favor confirme su compra: Si(S) / No(N)");

while ((confirmar != "S") && (confirmar != "N")) {
   alert("Debe ingresar una opción correcta");
   confirmar = prompt("Favor confirme su compra: Si(S) / No(N)");
}

if (confirmar == "S"){
   let precioTotal = cantidad * precioProducto;
   document.write ("El total de su compra es: " + precioTotal);
}else if (confirmar == "N") {
   seleccion = prompt ("Seleccione un producto de la lista: \n\n" + producto1 + "\n" + producto2 + "\n" + producto3 + "\n" + producto4);
}






