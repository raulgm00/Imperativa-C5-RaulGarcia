let array = [1,2,3,4];
let arrayComparacion = [1,2,3,4];

// Accediendo al array completo
console.log(" A R R A Y  1");
 console.log(array);
 console.log(" ");
 console.log(" A R R A Y  2");
 console.log(arrayComparacion);
 console.log(" ");


//Acediendo a una posicion dle array
console.log(" p o s i c i o n e s    ---- array[2]");
console.log(array[2]);
console.log(" ");
// let nombres = ["Raul", "Ulises", "Garcia", "Moreno"];
// let edades = [18, 22, 27 , 32];
// let valoresDeVerdad = [true, false,true];
// let variados = ["Ulises",34, true, false, edades];

// console.log(" M o s t r a r  V a l o r e s ")
// console.log(variados);

// console.log(" l o n g u i t u d array variados[]")
// console.log(variados.length);

// Metodos
//  console.log(array);
 console.log(" p u s h ()");
 array.push(5);
 console.log(array);
 console.log(" ");
 console.log(" p o p ()");
 array.pop();
 console.log(array);
 console.log(" ");

 console.log(" C O M P A R A C I O N  D E  A R R E G L O S");
 console.log(" ");
 console.log(" ");

// let notas= [3,5,8,10,9,7,8,8];
// console.log("n o t a s ")
// console.log(notas)
// console.log("p o s i c i o n del 8")
// console.log(notas.indexOf(8));
// if(notas.indexOf(8) != 1){
//     console.log("lo encontre")
// }
// console.log("last index of, primera aparicion dle elemento 8 iniciando desde el final")
// console.log(notas.lastIndexOf(8));


let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  console.log(`A R R A Y  S T R I N G`);  
  console.log(arrayFrase)
  console.log(" ");
  let fraseNueva = arrayFrase.join(" ");
  console.log("j o i n (frase) ");
  console.log(fraseNueva);
  console.log(" ");

  let estudiantes_array = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  
console.log("e s t u d i a n t e s");
console.log(estudiantes_array);
console.log(" ");

  let numero_1 = {
    nombre: 'Juan',
    promedio: 5,
    curso: 'iOS'
  }
  estudiantes_array.push(numero_1);
  console.log(estudiantes_array);
  console.log(" ");

  let numero_2 = {
    nombre: 'Miguel',
    promedio: 2,
    curso: 'Android'
  }
  estudiantes_array.push(numero_2);
  console.log(estudiantes_array);
  console.log(" ");


  console.log("R e i n g r e s o");
  let reingreso_1={
    nombre: "Mariana",
    promedio: 9,
    curso: "Full Stack"
  }
  estudiantes_array.unshift(reingreso_1);
  console.log(estudiantes_array);
  console.log(" ");

  let reingreso_2={
    nombre: "Francisco",
    promedio: 2,
    curso: "Android"
  }
  estudiantes_array.unshift(reingreso_2);
  console.log(estudiantes_array);
  console.log(" ");