
// Función para verificar las personas que si pueden ingresar por tener la edad requerida
function verificarEdad(edad) {
  const edadMinima = 18;
  return edad >= edadMinima;   
}
  //funcion flecha  para verificar las personas que no pueden pasar por no tener la edad minima requerida
let verificarEdad1 = (edad)=>{const edadMinima =18; return edad < edadMinima}

//Variable para almacenar el total de personas que pueden ingresar
let totaldeingreso=0

alert("Pase para ver la película")

   // Ciclo while para ingresar las edades de las personas
let repetir= true
while (repetir) {
    let nombre = prompt("Ingrese el nombre de la persona:");
    let edad = parseInt(prompt("Ingrese la edad de " + nombre ));

   //condicionales
if (verificarEdad(edad)) {
    console.log(nombre +" "+ "puede entrar a ver la película.");
    totaldeingreso++;
  }else if(verificarEdad1(edad)){
    console.warn(nombre +" "+"no cumple con la edad minima para ver la película.")
  }
   else {
    console.error(nombre +" "+ "no ingrestaste un número valido.");
  }
  repetir = confirm("¿Desea agregar otra persona?")
}

 //mostrar en un alert el resultado de las personas que ingresaron a ver la película
alert("Ingresaron " + totaldeingreso + " personas.");

  











