const prompt = require("prompt-sync")({ sigint: true });
let numero_uno= prompt("Ingrese su primer numero: ");
console.log(`Numero 1:  ${numero_uno}`);
let numero_dos= prompt("Ingrese su segundo numero: ");
console.log(`Numero 2: ${numero_dos}`);
console.log (`La suma de los numeros es: ${numero_uno} + ${numero_dos}`);
console.log (numero_uno + numero_dos );