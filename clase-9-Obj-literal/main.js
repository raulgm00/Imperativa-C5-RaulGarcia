let curso ={
    cantidadAlumnos: 10,
    docentes: ["Raul", "Ulises"],
    horario: "19:00 a 21:00",
    notificaciones: function(){
        return `El horario de la cursada ${this.horario}`;
    }
}
console.log(" OBJ COMPLETO");
console.log (curso);
console.log(" OBJ . PROPIEDAD");
console.log (curso.docentes);
console.log(" OBJ . PROPIEDAD [array]");
console.log (`La cantidad de profesores son [${curso.docentes}] = ${curso.docentes.length}`);
console.log(" Invocar una funcion de un Obj Literario");
console.log( curso.notificaciones());