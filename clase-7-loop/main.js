const loro = frase => {
    console.log(`----------- FUNCION soyLoro() ------------`)
    for(let x=1 ; x<=5; x++){
      console.log(`${frase} : ${x}`);
    };
}

loro("Oye");



// FUNCTIONS cuenta de impares hasta X

const noParesDeContarImparesHasta = num => {
    console.log(`----------- FUNCION noParesDeContarImparesHasta ${num} ------------`)
    let r=0;

    for(let contador=1; contador <= num; contador++){
        if( (contador % 2) == 1){
            r+=contador;
        }
    }
    return r;

}
console.log(noParesDeContarImparesHasta(4)) // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3. Los valores 0, 2 y 4 no los contabiliza por ser números pares.


function tablaDeMultiplicar(numero) {
    console.log(`------ TABLA DE MULTIPLICAR ${numero}`);  
   if(numero != 0){
    let contador= 1;
   while(contador<=10){
       resultado= numero * contador;
       console.log(`${numero}_*_${contador}_=_${resultado}`);
       contador++;
   }
   
}else{
       console.log("No se puede generar la tabla de multiplicar");
   }

}

tablaDeMultiplicar(5);