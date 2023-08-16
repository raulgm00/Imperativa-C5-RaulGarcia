const imprimirNumero = () =>{
    for(let i =5; i<=20; i+=3){
        console.log(i);
    }
}

imprimirNumero();

const imprimirNumero100 = () =>{
    let suma=0;
    for(let i=0; i<=100; i++){
        suma+=i;
        console.log(`${i} : ${suma}`);
    }

}

imprimirNumero100();


const factorial = (num) =>{
    let suma=1;
    for(let i=1; i<=num; i++){
        suma*=i;
        console.log(`Factorial ${i} : ${suma}`);
    }
}

factorial(10);
