
// forma clásica
function sumar_(a, b) {
    return a + b;
   }
   console.log( sumar_(2, 4) ); // 6

// ARROW FUNCTIONS - Suma
// ES6 arrow function
let sumar__ = (a, b) => a + b;
console.log( sumar__(2, 4) ); // 6

//ANCHOR - Funcion de multiplos de 2
   let multiplos = num => num*2;
   console.log (multiplos(10));

   //ANCHOR -Funcion de  Mayor de edad
   let mayor = num => {
    if( num >= 18){
        return true;
    }else{
        return false;
    }
}
console.log(mayor(17))

//ANCHOR - funcion de division
let divisicion = (numeroA, numeroB) => numeroA /numeroB ;
console.log( divisicion(10,2));

//ANCHOR - Saludar
let saludo = () => `Hola mundo !`
console.log(saludo());

//ANCHOR - Funcion de horaActual
let horaActual = () =>{
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes();
}
console.log( horaActual());

 //ANCHOR - Funcion suma inicializada parametros con ceros

 let sumaNumeros = (numeroA=0,numeroB=0)=>{

    console.log(` Los valores que llegan son ${numeroA} , ${numeroB}`);
    if (numeroA != 0 && numeroB != 0){
        return numeroA +numeroB;
    } else
        return "no se puede realizar la operacion";

 }
 console.log ( sumaNumeros (10));


 function loro (frase) {
    for(let x=1 ; x<=5; x++){
      console.log(frase);
    }
}

const loro = frase => {
    for(let x=1 ; x<=5; x++){
      console.log(`${frase} : ${x}`);
    }
}
