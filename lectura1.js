// Importar el módulo readline
const readline = require("readline");
// Crear una interfaz para leer datos de la entrada estándar (stdin)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Hacer una pregunta al usuario
redl.question("Ingrese dato: ", (input) => {
  // Almacenar el dato ingresado en una variable
  const usuario = input;
  // Imprimir el dato almacenado
  console.log(`Has ingresado: ${usuario}`);
  // Cerrar la interfaz de lectura
  redl.close();
});
