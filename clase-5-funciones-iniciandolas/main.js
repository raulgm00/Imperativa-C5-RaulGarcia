// ANCHOR - Funcion inicalizada
function saludar (nombre= 'Visitante', apellido='Anonimo'){
     return `hola ${nombre} ${apellido}, ¿como estas?`
}

//ANCHOR - funcion Arrown
const saludar = (nombre='Visitante', apellido='anonimo') => `hola ${nombre} ${apellido}, ¿como estas?`;

//saludando con parametros
console.log( saludar('Raul','Garcia'));

//saludando sin parametros
console.log( saludar());