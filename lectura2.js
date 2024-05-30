// Importar el módulo readline
const readline = require("readline");

// Crear una interfaz para leer datos de la entrada estándar (stdin)
const redl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Hacer la primera pregunta al usuario
redl.question("Ingrese el primer dato: ", (input1) => {
  // Almacenar el primer dato ingresado en una variable
  const dato1 = input1;

  // Hacer la segunda pregunta al usuario
  redl.question("Ingrese el segundo dato: ", (input2) => {
    // Almacenar el segundo dato ingresado en una variable
    const dato2 = input2;

    // Imprimir los datos almacenados
    console.log(`Has ingresado: ${dato1} y ${dato2}`);

    // Cerrar la interfaz de lectura
    redl.close();
  });
});
