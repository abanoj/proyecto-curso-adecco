const Usuario = /** @class */ (function () {
  function Usuario(dni, name, lastName, username, password, tipo, activo) {
    this.id = ++Usuario.cont;
    this.dni = dni;
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.tipo = tipo;
    this.activo = activo;
  }
  Usuario.cont = 0;
  return Usuario;
})();
const Nota = /** @class */ (function () {
  function Nota(idAlumno, idAsignatura, idCurso, nota) {
    this.id = ++Nota.cont;
    this.idAlumno = idAlumno;
    this.idAsignatura = idAsignatura;
    this.idCurso = idCurso;
    this.nota = nota;
  }
  Nota.cont = 0;
  return Nota;
})();
const Asignatura = /** @class */ (function () {
  function Asignatura(name, ...idProfesores) {
    this.id = ++Asignatura.cont;
    this.name = name;
    this.idProfesores = idProfesores;
  }
  Asignatura.cont = 0;
  return Asignatura;
})();
const Cursos = /** @class */ (function () {
  function Cursos(name, ...idAsignaturas) {
    this.id = ++Cursos.cont;
    this.name = name;
    this.idAsignaturas = idAsignaturas;
  }
  Cursos.cont = 0;
  return Cursos;
})();

// Creacion de Usuarios
let juan = new Usuario(
  "00523821F",
  "Juan",
  "Perez",
  "juanperez",
  "123abc",
  "alumno",
  true
);
let maria = new Usuario(
  "0012381S",
  "Maria",
  "Ramos",
  "mariar12",
  "a1b2c3",
  "alumno",
  false
);
let ramon = new Usuario(
  "0045281D",
  "Ramón",
  "Sanchez",
  "RanSanz121",
  "sg2c3",
  "alumno",
  true
);
let jose = new Usuario(
  "Y9307718J",
  "José",
  "Estevez",
  "estevezjose",
  "prof20$5",
  "profesor",
  true
);
let pedro = new Usuario(
  "Y8180092G",
  "Pedro",
  "Estevez",
  "pedroes",
  "pGsg20$5",
  "profesor",
  true
);
let rosa = new Usuario(
  "Y6168872G",
  "Rosa",
  "Perez",
  "rosapez",
  "prda20$5",
  "profesor",
  true
);
const arrayUsuarios = [juan, maria, ramon, jose, pedro, rosa];

// Creacion de Asignatura
let matematicas = new Asignatura("Matemáticas", jose.id, pedro.id);
let fisica = new Asignatura("Física", pedro.id, jose.id);
let quimica = new Asignatura("Química", rosa.id);
const arrayAsignaturas = [matematicas, fisica, quimica];

// Creacion de Cursos
let curso2021 = new Cursos("Curso 2021", matematicas.id, fisica.id, quimica.id);
let curso2022 = new Cursos("Curso 2022", matematicas.id, fisica.id, quimica.id);
let curso2023 = new Cursos("Curso 2023", matematicas.id, fisica.id, quimica.id);
const arrayCursos = [curso2021, curso2022, curso2023];

// Creacion de Notas
let notaJuan1 = new Nota(juan.id, matematicas.id, curso2023.id, 8);
let notaJuan2 = new Nota(juan.id, fisica.id, curso2023.id, 10);
let notaRamon1 = new Nota(ramon.id, quimica.id, curso2022.id, 6);
let notaMaria1 = new Nota(maria.id, matematicas.id, curso2021.id, 9);
let notaMaria2 = new Nota(maria.id, fisica.id, curso2021.id, 10);
const arrayNotas = [notaJuan1, notaJuan2, notaRamon1, notaMaria1, notaMaria2];

// Recorre array notas
const imprimeNotas = () => {
  for (const el of arrayNotas) {
    console.log(`Id: ${el.id}`);
    console.log(`Alumno: ${el.idAlumno}`);
    console.log(`Asignatura: ${el.idAsignatura}`);
    console.log(`Curso: ${el.idCurso}`);
    console.log(`Nota: ${el.nota}`);
    console.log("==================");
  }
};

// Convierte a JSON
const jsonUsuarios = JSON.stringify(arrayUsuarios);
const jsonAsignaturas = JSON.stringify(arrayAsignaturas);
const jsonCursos = JSON.stringify(arrayCursos);
const jsonNotas = JSON.stringify(arrayNotas);

console.log(jsonNotas);

const llamarAPI = (url) => {
  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      data.results.forEach((el) => {
        console.log(`Nombre: ${el.name}`);
        console.log(`Altura: ${el.height}`);
        console.log(`Color ojos: ${el.eye_color}`);
        console.log("=====================");
      });
    })
    .catch((reject) => console.log(reject));
};

// llamarAPI("https://swapi.dev/api/people/");

//Función que obtiene todos los usuarios y su tipo cada 5 segundos
const intervaloUsuarios = setInterval(() => {
  arrayUsuarios.forEach((el) => {
    console.log(`${el.name} es un(a) ${el.tipo}`);
  });
  console.log("===============================");
}, 5000);

// Parando el setInterval anterior
setTimeout(() => clearInterval(intervaloUsuarios), 16000);

// Creando un nuevo usuario
setTimeout(() => {
  let carlos = new Usuario(
    "Y9690031G",
    "Carlos",
    "Perez",
    "cperez",
    "c151p&a",
    "alumno",
    true
  );
  arrayUsuarios.push(carlos);
}, 6000);

