class Usuario {
    constructor(name, lastName, username, password, tipo, activo){
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.tipo = tipo;
        this.activo = activo;
    }
}

class Nota{
    constructor(alumno, asignatura, curso, nota){
        this.idAlumno = alumno;
        this.idAsignatura = asignatura;
        this.idCurso = curso;
        this.nota = nota;
    }
}

class Asignatura{
    constructor(nombre, ...profesores){
        this.nombre = nombre;
        this.idProfesores = profesores;
    }
}

class Cursos{
    constructor(nombre, ...asignaturas){
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }
}

let cursos = new Cursos("2023", "Matematicas", "Lengua", "Fisica");

console.log(`Curso: ${cursos.nombre}`);
console.log("Asignaturas:");
cursos.asignaturas.forEach( el => console.log(el));