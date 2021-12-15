//Facultades
export const faculties = [
  {
    id: "faculty01",
    name: "Facultad de Informática",
  },
  {
    id: "faculty02",
    name: "Facultad de Trabajo Social",
  },
];

//Titulaciones
export const studies = [
  {
    id: "studyfdi01",
    name: "Grado Administración y Dirección de Empresas",
    faculty: "faculty01",
  },
  {
    id: "studyfdi02",
    name: "Grado Desarrollo de Videojuegos",
    faculty: "faculty01",
  },
  {
    id: "studyfdi03",
    name: "Grado Ingeniería de Computadores",
    faculty: "faculty01",
  },
  {
    id: "studyfdi04",
    name: "Grado Ingeniería del Software",
    faculty: "faculty01",
  },
  {
    id: "studyts01",
    name: "Grado Trabajo Social",
    faculty: "faculty02",
  },
  {
    id: "studyts02",
    name: "Máster Estudios LGBTIQ+",
    faculty: "faculty02",
  },
  {
    id: "studyts03",
    name: "Máster Trabajo Social Comunitario, Gestión y Ev. Servicios Soc.",
    faculty: "faculty02",
  },
];

//Cursos
export const courses = [
  {
    id: "coursefdi0101",
    name: "1º",
    study: "studyfdi01",
  },
  {
    id: "coursefdi0102",
    name: "2º",
    study: "studyfdi01",
  },
  {
    id: "coursefdi0103",
    name: "3º",
    study: "studyfdi01",
  },
  {
    id: "coursefdi0104",
    name: "4º",
    study: "studyfdi01",
  },
  {
    id: "coursefdi0105",
    name: "5º",
    study: "studyfdi01",
  },
  {
    id: "coursefdi0201",
    name: "1º",
    study: "studyfdi02",
  },
  {
    id: "coursefdi0202",
    name: "2º",
    study: "studyfdi02",
  },
  {
    id: "coursefdi0203",
    name: "3º",
    study: "studyfdi02",
  },
  {
    id: "coursefdi0204",
    name: "4º",
    study: "studyfdi02",
  },
  {
    id: "coursefdi0301",
    name: "1º",
    study: "studyfdi03",
  },
  {
    id: "coursefdi0302",
    name: "2º",
    study: "studyfdi03",
  },
  {
    id: "coursefdi0303",
    name: "3º",
    study: "studyfdi03",
  },
  {
    id: "coursefdi0304",
    name: "4º",
    study: "studyfdi03",
  },
  {
    id: "coursefdi0401",
    name: "1º",
    study: "studyfdi04",
  },
  {
    id: "coursefdi0402",
    name: "2º",
    study: "studyfdi04",
  },
  {
    id: "coursefdi0403",
    name: "3º",
    study: "studyfdi04",
  },
  {
    id: "coursefdi0404",
    name: "4º",
    study: "studyfdi04",
  },
  {
    id: "coursets0101",
    name: "1º",
    study: "studyts01",
  },
  {
    id: "course0102",
    name: "2º",
    study: "studyts01",
  },
  {
    id: "course0103",
    name: "3º",
    study: "studyts01",
  },
  {
    id: "course0104",
    name: "4º",
    study: "studyts01",
  },
  {
    id: "course0201",
    name: "1º",
    study: "studyts02",
  },
  {
    id: "course0301",
    name: "1º",
    study: "studyts03",
  },
];

//Asociaciones UCM
export const ucmAssociations = [
  {
    id: "ucmAssoc0101",
    name: "ASCII",
    faculty: "faculty01",
  },
  {
    id: "ucmAssoc0102",
    name: "Diskóbolo",
    faculty: "faculty01",
  },
  {
    id: "ucmAssoc0103",
    name: "LibreLab",
    faculty: "faculty01",
  },
  {
    id: "ucmAssoc0104",
    name: "Ludic Association of Gamers (LAG)",
    faculty: "faculty01",
  },
  {
    id: "ucmAssoc0105",
    name: "Otros",
    faculty: "faculty01",
  },
  {
    id: "ucmAssoc0201",
    name: "Trabajo Social Crítico",
    faculty: "faculty02",
  },
  {
    id: "ucmAssoc0202",
    name: "Xti",
    faculty: "faculty02",
  },
  {
    id: "ucmAssoc0203",
    name: "Zona IN - Asoc. Estudiantes Div. Funcional/Discapacidad",
    faculty: "faculty02",
  },
  ,
  {
    id: "ucmAssoc0204",
    name: "Otros",
    faculty: "faculty02",
  },
];

//Asociaciones externas UCM
export const externalAssociations = [
  {
    id: "assoc0001",
    name: "Cáritas",
    category: "Voluntariado",
  },
  {
    id: "assoc0002",
    name: "Cruz Roja",
    category: "Voluntariado",
  },
  {
    id: "assoc0003",
    name: "Unicef",
    category: "Voluntariado",
  },
  {
    id: "assoc0004",
    name: "Otros",
    category: "Otros",
  },
];
