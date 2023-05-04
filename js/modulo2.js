class Usuario {
    constructor(dni, name, lastName, username, password, tipo, activo){
        this.dni = dni;
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
    constructor(name, ...profesores){
        this.name = name;
        this.idProfesores = profesores;
    }
}

class Cursos{
    constructor(name, ...asignaturas){
        this.name = name;
        this.asignaturas = asignaturas;
    }
}
// Creacion de Usuarios
let juan = new Usuario("00523821F", "Juan", "Perez", "juanperez", "123abc", "alumno", true);
let maria = new Usuario("0012381S", "Maria", "Ramos", "mariar12", "a1b2c3", "alumno", false);
let ramon = new Usuario("0045281D", "Ramón", "Sanchez", "RanSanz121", "sg2c3", "alumno", true);
let jose = new Usuario("Y9307718J", "José", "Estevez", "estevezjose", "prof20$5", "profesor", true);
let pedro = new Usuario("Y8180092G", "Pedro", "Estevez", "pedroes", "pGsg20$5", "profesor", true);
let rosa = new Usuario("Y6168872G", "Rosa", "Perez", "rosapez", "prda20$5", "profesor", true);
const arrayUsuarios = [juan, maria, ramon, jose, pedro, rosa];

// Creacion de Asignatura
let matematicas = new Asignatura("Matemáticas", jose.name, pedro.name);
let fisica = new Asignatura("Física", pedro.name, jose.name);
let quimica = new Asignatura("Química", rosa.name);
const arrayAsignaturas = [matematicas, fisica, quimica];

// Creacion de Cursos
let curso2021 = new Cursos("Curso 2021", matematicas.name, fisica.name, quimica.name);
let curso2022 = new Cursos("Curso 2022", matematicas.name, fisica.name, quimica.name);
let curso2023 = new Cursos("Curso 2023", matematicas.name, fisica.name, quimica.name);
const arrayCursos = [curso2021, curso2022, curso2023];

// Creacion de Notas
let notaJuan1 = new Nota(juan.name, matematicas.name, curso2023.name, 8);
let notaJuan2 = new Nota(juan.name, fisica.name, curso2023.name, 10);
let notaRamon1 = new Nota(ramon.name, quimica.name, curso2023.name, 6);
let notaMaria1 = new Nota(maria.name, matematicas.name, curso2021.name, 9);
let notaMaria2 = new Nota(maria.name, fisica.name, curso2021.name, 10);
const arrayNotas = [notaJuan1, notaJuan2, notaRamon1, notaMaria1, notaMaria2];

// for (const el of arrayNotas) {
//     console.log(`Alumno: ${el.idAlumno}`);
//     console.log(`Asignatura: ${el.idAsignatura}`);
//     console.log(`Curso: ${el.curso}`);
//     console.log(`Nota: ${el.nota}`);
//     console.log("==================");
// }

const jsonUsuarios = JSON.stringify(arrayUsuarios);
const jsonAsignaturas = JSON.stringify(arrayAsignaturas);
const jsonCursos = JSON.stringify(arrayCursos);
const jsonNotas = JSON.stringify(arrayNotas);

//Llamado a API
fetch("https://swapi.dev/api/people/")
.then(res => (res.ok ? res.json(): Promise.reject(res)))
.then(data => {
    data.results.forEach(el => {
        console.log(`Nombre: ${el.name}`);
        console.log(`Altura: ${el.height}`);
        console.log(`Color ojos: ${el.eye_color}`);
        console.log("=====================");
    });
})
.catch(reject => console.log(reject));