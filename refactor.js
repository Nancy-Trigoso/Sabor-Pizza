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