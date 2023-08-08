//Funciones expresadas
let sumar = function(numeroA,numeroB) {
        return numeroA + numeroB;
    }
console.log(sumar(1,100));


//Funcion declarada
function restar(numeroC, numeroD){
    return numeroC - numeroD;
}
console.log(restar(100, 1));



function anterior(numero){
    return numero-1;
}

function triple(numero){
    return numero*3;
}


// EJERCICIO 3



function anteriorDelTriple(numero){
    let a = triple(numero);
    let b = anterior (a);
    return b;
}

console.log
console.log( anteriorDelTriple (9));


// ARROW FUNCTIONS

// forma clásica
function sumar_(a, b) {
    return a + b;
   }
   console.log( sumar_(2, 4) ); // 6
   
   // ES6 arrow function
   let sumar__ = (a, b) => a + b;
   
   console.log( sumar__(2, 4) ); // 6


   let resta = number => number-10;

   con