//console.console.log("Hola mundo desde nuestro archivo");
/** FUNCION:
El nombre de la fucion siempre de acabar en un verbo infinitivo(Puede acabar en: –ar, –er o –ir)
*Las funciones son acciones
*Puede conter n lineas(lo maximo que puede tener una funcion son 50 lineas)
*/
//function nombredelafuncion(){
//Dentro de la funcion pueden creae variables, usar condicionales
//prompt("Ingresa tu nombre");
//las funciones puede retornar algo o retornar nada
//return "hola";

//}

//para poder ejecutar el codigo de la funcion
//const mensaje = nombredelafuncion();
//console.log(mensaje);

//se pone el mas para confernar el string + la variable
//condicionales 
const nombre = prompt("Cual es tu nombre?");
const apellido = prompt("Cual es tu apellido?");
const correo = prompt("Cual es tu correo?");

function ingresadatos(){
if (nombre !==null && nombre !== "", apellido !==null && apellido !== "", correo !==null && correo !== "" ){
const HelloElement = document.getElementById("Hello");
HelloElement.innerHTML = "<forte>Hola me llamo: " + nombre  +  " " + apellido +  " y mi correo electronico es:<forte>"  + correo;
} else {
    HelloElement.innerHTML = "<string>El usuario no registro sus datos<string>";
}

}

ingresadatos()


function solicitarnumero(){
const numero = prompt("Ingrese un numero");
return Number(numero);
}
function sumar2(){
    const numero1 = solicitarnumero();
    const numero2 = solicitarnumero();

    /**
     * Cuando intentamos convertir un texto a un number
     * Number("hola")= Nan(Not a Number)
     */
    /**
     * isNan(18)->false
     * isNan("hola")->true
     */

    //if (isNaN(numero1)) esto es igual a if (isNaN(numero1)) ===true)
    //if (!isNaN(numero1)) esto es igual a if (isNaN(numero1)) ===false)
    if (!isNaN(numero1) && !isNaN(numero2)){
        return numero1 + numero2;
    } else {
        return"La suma no se pudo hacer.";
    }
}
    //console.log("NUMBER1", isNaN(numero1));
    //console.log("NUMBER1", isNaN(numero1));
    //return numero1 + numero2;
    

//No puede ser  accedida fuera de la funcion.
//console.log("Numbre1", numero1);
//console.log("Numbre2", numero2);

const resultado2 = sumar2();
console.log("Resultado2", resultado2);

//function saludar(nombre){
    //console.log("Hola me llamo " + nombre);

//}
//saludar("Pepe");
//saludar("Bruno");
//saludar("Linder");
//saludar("Alex");
    



//creemos una funcion que sume 2 numeros usando prompt.
//Todo lo que escribo en el prompt es un string.
//function sumar(){
    //const numero1 = prompt("Ingrese el numer1");
    //const numero2 = prompt("Ingrese el numer2");
    // Nos dimos cuenta que la informacion que viene de prompt es string.
    //por ende, debemos convertir ese string a un number.

    //console.log(typeof Number(numero1), typeof numero2);
    //return Number(numneo1) + Number(numero2);
//}
 //const resultado = sumar();
 //console.log("Resultado", resultado);
