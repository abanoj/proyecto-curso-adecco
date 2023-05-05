class Usuario {
  private static cont: number = 0;
  private id: number;
  private dni: String;
  private name: String;
  private lastName: String;
  private username: String;
  private password: String;
  private tipo: String;
  private activo: boolean;

  constructor(dni: String, name: String, lastName: String, username: String, password: String, tipo: String, activo: boolean) {
    this.id = ++Usuario.cont;
    this.dni = dni;
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.tipo = tipo;
    this.activo = activo;
  }
}

class Nota {
  private static cont: number = 0;
  private id: number;
  private idAlumno: number;
  private idAsignatura: number;
  private idCurso: number;
  private nota: number;

  constructor(
    idAlumno: number, idAsignatura: number, idCurso: number, nota: number
  ) {
    this.id = ++Nota.cont;
    this.idAlumno = idAlumno;
    this.idAsignatura = idAsignatura;
    this.idCurso = idCurso;
    this.nota = nota;
  }
}

class Asignatura {
  private static cont: number = 0;
  private id: number;
  private name: String;
  private idProfesores: number[];

  constructor(name: String, ...idProfesores: number[]) {
    this.id = ++Asignatura.cont;
    this.name = name;
    this.idProfesores = idProfesores;
  }
}

class Cursos {
  private static cont: number = 0;
  private id: number;
  private name: String;
  private idAsignaturas: String[];

  constructor(name: String, ...idAsignaturas: String[]) {
    this.id = ++Cursos.cont;
    this.name = name;
    this.idAsignaturas = idAsignaturas;
  }
}
