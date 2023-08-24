let dominio = dominio => {
    let cadena= "http://www.";
    cadena+=dominio;
    return cadena;
}

console.log(dominio("digitalhouse.com.ar"));    

const reemplazoFastFast_1 = (texto,buscar,remplazar) => {
    let cadena= "";
    cadena = texto.replace(buscar,remplazar);
    return cadena;
}

let r= reemplazoFastFast_1("Hola Mundo!", "Mundo", "Ulises");
console.log(r);

function reemplazoFastFast_2(texto,buscar,remplazar) {
    let cadena= "";
    cadena = texto.replace(buscar,remplazar);
    return cadena;
}

let r_2= reemplazoFastFast_2("Hola Mundo !", "Mundo", "Ulises");
console.log(r);


const menciona= (texto,palabra) =>{
    return texto.includes(palabra);
}
let r_3 = menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'); 
console.log(r_3);


let frase = 'Hola!, soy Carli';
let licenciada= frase.slice(11);
console.log(licenciada);