const loopDePares = numero =>{
    
    for(let i=1 ; i<=100 ; i++){
        
        let evalua = numero+i;

        if( evalua % 2 === 0){
        //Pares
            console.log(`El numero ${evalua} es par`);
        }
    }
}
// console.log(`- - - - - L O O P   D E   P A R E S - - - - -`);
// loopDePares(1);
// console.log(`- - - - - - - - - - - - - - - - - - - - - - - - -`);

const loopDeImparesConPalabras= (numero, palabra)=>{

    for(let i =1 ; i <= 100 ;i++){
        let evalua = numero+i;
        if(evalua % 2 === 1){
            console.log(`EL numero ${evalua} es: ${palabra}`);
        }
    }

}



// console.log(`- - - - - L O O P   D E   I M P A R E S   C O N   P A L A B R A S- - - - -`);
// loopDeImparesConPalabras(1, "impar");
// console.log(`- - - - - - - - - - - - - - - - - - - - - - - -`);


const sumatoria = numero =>{
    let sum = 0;
    let cadena= "";
    
    for(let i=1 ; i <= numero ; i++){
        sum+=i;
        
        if(i == 1){
            cadena=cadena+ "("+i +"+";
            
        }else{
             if(i < numero ){
                cadena+=`${i}+`;
             }else{
                cadena+=`${i})`;
             }
         }
    }
    return `${cadena} = ${sum}`;
    // return sum;
}
// console.log(`- - - - - S U M A T O R I A - - - - -`);
// let cadena = sumatoria(10);
// console.log(cadena);
// console.log(`- - - - - - - - - - - - - - - - - - - - - - - -`);

const nuevoArreglo = tope =>{
     let arrayNuevo = [];
     for(let i=1 ; i <= tope; i++){
         arrayNuevo.push(i);
     }
return arrayNuevo;
}

// console.log(`- - - - - A R R E G L O     N U E V O - - - - -`);
// let array = nuevoArreglo(5);
// console.log(array);
// console.log(`- - - - - - - - - - - - - - - - - - - - - - - -`);


const split = cadena =>{
    let array = [];
    for(let i=0 ; i < cadena.length; i++){
         array.push(cadena.charAt(i));
    }
    return array;
}
// console.log(`- - - - - C A D E N A - - - A R R E G L O - - - - -`);
// let array = split("hola");
// console.log(array);
// console.log(`- - - - - - - - - - - - - - - - - - - - - - - -`);



const arrayHandler = (array_1,array_2) =>{

    for( let i=0; i< array_1.length ; i++ ){
          console.log(`Soy [${array_1[i]}] y yo soy [${array_2[i]}]`);
       }
}
// console.log(`- - - - - M A N E J O - D E - A R R E G L O S- - - - -`);
// arrayHandler([1,2,3,4], ["h","o","l","a"]);
// console.log(`- - - - - - - - - - - - - - - - - - - - - - - -`);

const palindromo = cadena =>{
     
    let array_cadena = cadena.split(""); 
    console.log(array_cadena);
    let array_tmp = array_cadena.slice();
    // console.log(array_tmp);
    let array_polindromo = array_tmp.reverse();
    console.log(array_polindromo);
    let bandera = false;
    for(let i=0; i< array_cadena.length; i++){
        
          if(array_cadena[i].toUpperCase() === array_polindromo[i].toUpperCase()){
            bandera = true;
          }else{
            bandera = false;
            break;
          }
    }
    return bandera;
}
 console.log(`- - - - - P O L I N D R O M O - - - - -`);
 let palabra = "Ana";
//  let palabra = "Enrique";
 let esPalindromo = palindromo(palabra);
console.log(`¿La ${palabra} es palindromo ? R= ${esPalindromo}`)
console.log(`- - - - - - - - - - - - - - - - - - - - - - - -`);





