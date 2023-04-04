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

let edad = Number(prompt("Ingrese su edad "));
const ESMAYOR = (edad >= 18);

if (ESMAYOR){
    alert("Usted puede ingresar al sitio web");
}else {
    alert("Usted no puede ingresar al sitio porque es menor de edad");
}