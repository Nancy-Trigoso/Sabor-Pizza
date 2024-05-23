function mostrarnombre(){
    const nombre = prompt("Cual es tu nombre?");
    const apellido = prompt("Cual es tu apellido?");
    const correo = prompt("Cual es tu correo?");
    if (nombre, apellido, correo !== null){
        document.write("Hola me llamo " + nombre + " " + apellido +  " y mi correo electronico es: " + correo);
    } else {
        document.write("El usuario no escribio sus datos");
    }
}

function solicitarnumero(){
    const numero = prompt("Ingrese un numero");
    return Number(numero);
    }
    function sumar2(){
        const numero1 = solicitarnumero();
        const numero2 = solicitarnumero();
        if (!isNaN(numero1) && !isNaN(numero2)){
            return numero1 + numero2;
        } else {
            return"La suma no se pudo hacer.";
        }

    }
    const resultado2 = sumar2();
    console.log("Resultado2", resultado2);

function imprimirimagenes(){
    const numerodeveces = Number(prompt("Cuántas pizzas quieres?"));

    for(let i = 0; i < numerodeveces; i++){
        document.write("<img src='./pizza.png' alt='pizzas' width= 150px  height=100px/>");
    }
}

function numerodeingreso(){
    let numerocorrecto = 10;
    let respuestadelusuario = null;
    let contadordeintentos = 0;

    while (respuestadelusuario !== numerocorrecto){
        respuestadelusuario = Number(prompt("Ingresa la clave para poder ingresar a la página(Solo por esta vez te dare un dato: ingresa del 1 al 10)"));
        
        contadordeintentos +=1;
    }

}