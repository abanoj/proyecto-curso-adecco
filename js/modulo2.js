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
// Creacion de usuarios
let juan = new Usuario("Juan", "Perez", "juanperez", "123abc", "alumno", true);
let maria = new Usuario("Maria", "Ramos", "mariar12", "a1b2c3", "alumno", false);
let jose = new Usuario("José", "Estevez", "estevezjose", "prof20$5", "profesor", true);
let pedro = new Usuario("Pedro", "Estevez", "pedroes", "pGsg20$5", "profesor", true);
let rosa = new Usuario("Rosa", "Perez", "rosapez", "prda20$5", "profesor", true);

// Creacion de Asignatura
let matematica = new Asignatura("Matemáticas", jose.name, pedro.name);
let fisica = new Asignatura("Matemáticas", pedro.name, jose.name);
let quimica = new Asignatura("Matemáticas", rosa.name);
// Creacion de Cursos
let curso2023 = new Cursos("Curso 2023", matematica.nombre, fisica.nombre, quimica.nombre);
console.log(curso2023);


