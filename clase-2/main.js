const prompt = require("prompt-sync")({ sigint: true });
let numero_uno=  parseInt(prompt("Ingrese su primer numero: "));
let numero_dos=  parseInt(prompt("Ingrese su segundo numero: "));
let suma =  numero_uno + numero_dos;


console.log ("La suma de los numeros es:" + suma );

