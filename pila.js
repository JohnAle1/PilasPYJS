// Importar la pila desde ds.js
const { Stack } = require("@datastructures-js/stack");
//Listas para validar operaciones
const PilaNum = new Stack();
const PilaOper = new Stack();
const pilafinal = new Stack();
// Agregar elementos a PilaNum
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach((element) => {
  PilaNum.push(element);
});

// Agregar elementos a PilaOper
["+", "*", "/", "-", "**"].forEach((element) => {
  PilaOper.push(element);
});
// Importar el módulo readline
const readline = require("readline");
// Crear una interfaz para leer datos de la entrada estándar (stdin)
const redl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Hacer una pregunta al usuario
redl.question("Cual es la expresión: ", (input) => {
  // Almacenar el dato ingresado en una variable
  const pilaexpresion = new Stack();
  // Convertir la expresión en una pila
  for (const char of input) {
    pilaexpresion.push(char);
  }
  // Imprimir el contenido de la pila
  //console.log("Contenido de pilaexpresion:", pilaexpresion.toArray());
  // Cerrar la interfaz de lectura
  redl.close();
  // Flujo normal de trabajo siguiente
  while (pilaexpresion.size() > 0) {
    let auxContador = pilaexpresion.peek();
    //Ciclo para identificar numeros
    if (ContarOcurrencias(PilaNum, auxContador) > 0) {
      while (ContarOcurrencias(PilaNum, auxContador) > 0) {
        pilaexpresion.pop();
        if (pilaexpresion.size() > 0) {
          auxContador = pilaexpresion.peek();
        } else {
          auxContador = 11;
        }
      }
      pilafinal.push(1);
    }
    //Ciclo para identificar operadores
    else {
      pilaexpresion.pop();
      pilafinal.push(2);
    }
  }
  console.log(pilafinal);
});

// Función para contar ocurrencias de un elemento en la pila
function ContarOcurrencias(stack, element) {
  let count = 0;
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    const top = stack.pop();
    if (top === element) {
      count++;
    }
    tempStack.push(top);
  }

  // Restaurar la pila original
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return count;
}