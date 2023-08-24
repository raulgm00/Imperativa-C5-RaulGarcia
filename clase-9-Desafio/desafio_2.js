
let array = [ { nombre: "Lean", edad: 27, domicilio: "Calle 502" }, { nombre: "Eze", edad: 49, domicilio: "Calle 502"},  ]

const proUnica = (array,pro) =>{
    let nuevoArray = [];
    
    if(pro === "nombre"){
        for(let i=0; i< array.length; i++){
            let obj  ={
                nombre: array[i].nombre
            }
            nuevoArray.push(obj);
            
        }
    }else{
        for(let i=0; i< array.length; i++){
            let obj  ={
                edad: array[i].edad
            }
            nuevoArray.push(obj);
            
        }    
        
    }

    return nuevoArray;
}

/*debe retornar [ { edad: 27 }, { edad: 49 } ]*/
let r1= proUnica(array, "edad"); 
console.log(r1);

/*debe retornar [ { nombre: "Lean"}, { nombre: "Eze" } ]*/
let r2= proUnica(array, "nombre"); 
console.log(r2);

let r3= proUnica(array, "domicilio"); 
console.log(r3);