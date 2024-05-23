const email ="nancytrigoso1998@gmail.com";
const password = "nancy123";

function validarlogin(){
    //PASO01: Pedir los prompt
    const correo = prompt("Ingresa su correo");
    const contrasena = prompt ("Ingrese su contraseña");
    let contador = 0;
    
    if (contador < 3){
    if (correo === email && password === contrasena){
    document.write("Ingreso exitosamente!!!");
    }else{
        document.write("Hubo un error en el email y/o password, intente nuevamente..");
        contador += 1;
    }
    } else {
        document.write("Llegaste l límite de intentos");
    }
}

function validarsiunusuarioesmayor(){

    //Todo dato que venga de prompt sera un string

    const edad1 = Number(prompt("Ingrese la edad del usuario1"));
    const edad2 = Number(prompt("Ingrese la edad del usuario2"));
    const edad3 = Number(prompt("Ingrese la edad del usuario3"));
   
    if(edad1>=18 || edad2>=18 || edad3>=18){
        document.write("Al menos un usurio es mayor");
    }else{
        document.write("Todos los usuarios son menores");
    }
    
    //console.log(typeof edad1);
    //console.log(typeof edad2);
    //console.log(typeof edad3);

}

//validarsiunusuarioesmayor();

function adivinarnumero(){
    let numerocorrecto = 121;
    let respuestadelusuario = null;
    let contadordeintentos = 0;

    while (respuestadelusuario !== numerocorrecto){
        respuestadelusuario = Number(prompt("Adivina el número"));
        
        contadordeintentos +=1;
        
        if (contadordeintentos === 5){
            document.write("Llegaste al límite de intentos");
            break;
        }
        
        if (respuestadelusuario === numerocorrecto){
            document.write("Adivinaste el numero \n");
        }else{
            document.write("<p> sigue intentando" + contadordeintentos + "</p>");
        }
    }

}

 function imprimirnumeros(){
    /**
     * let i - 0 valor inicial
     * i <=100 condicion
     * i++ de cuanto en cuanto van los pasos
     * nota:
     * i++ =i += 1
     */
    }
    function imprimirNumeros() {
        /**
         * let i = 0 Valor incial
         * i <= 100 Condicion
         * i++ de cuanto en cuanto van los paasa
         * Nota:
         * i++ = i += 1
         */
      
const elementos = [
          {
            title: "¿Qué requisitos necesito para iniciar?",
            text: "Puedes iniciar a estudiar sin tener ningún conocimiento previo sobre programación. Solo debes tener una laptop o tablet con teclado, y muchas ganas de entrar al futuro.",
          },
          {
            title: "¿A qué personas está dirigido?",
            text: " Tanto para personas que quieren iniciar una carrera profesional con gran demanda laboral, como para personas que ya son profesionales ó trabajan en otras industrias, y que quieren dar un salto a un mejor estilo de vida.",
          },
        ];
      
        for (let i = 0; i <= 100; i++) {
          document.write("<p class='card'>El número es: " + i + "</p>");
        }
      
        for (let i = 0; i < elementos.length; i++) {
          document.write(
            "<div class='card'><p> " +
              elementos[i].title +
              "</p><p>" +
              elementos[i].text +
              "</p></div>"
          );
        }
      }



 
//function mostrarnumeros(){
    //while es una funcion que se ejecuta en base a una condicion. while es un 
    //bucle por ende para la  accion hasta que la condicion sea false
    //while(true){
        ///console.log("Bucle infinito");

   // }
//}