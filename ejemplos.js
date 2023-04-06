//const ESPACIO = " ";
//let nombre = prompt ("Como te llamas ");
//let resultado = alert ("Hola" + ESPACIO + nombre);
//let numero = 5;

//if (numero == //7) {
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

let entrada = prompt ("Ingrese un dato: ");

while (entrada != "ESC"){
    alert ("El usuario ingresó: " + entrada);
    entrada = prompt ("Ingrese otro dato: ");
}