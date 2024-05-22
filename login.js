const email ="nancytrigoso1998@gmail.com";
const password = "nancy123";

function validarlogin(){
    //PASO01: Pedir los prompt
    const correo = prompt("Ingresa su correo");
    const contrasena = prompt ("Ingrese su contraseña");
    if (correo === email && password === contrasena){
    document.write("Ingreso exitosamente!!!");
    }else{
        document.write("Hubo un error en el email y/o password, intente nuevamente..");

    }
}