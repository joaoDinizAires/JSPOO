const students = [
    {nome: "João", nota: 5},
    {nome: "Ricardo",nota: 8},
    {nome: "Paula",nota: 7},
    {nome: "Juliana",nota: 3},
    {nome: "Jucelino",nota: 2},
    {nome: "Lucas",nota: 10},
    {nome:"Marcela",nota:6}
]
let pointAverage = 6;

function filterPositiveGpa(StudentsArr){
    const studentsWithPositiveGPA = [];
    StudentsArr.forEach(student => {
        if (student.nota >= pointAverage){
            studentsWithPositiveGPA.push(student);
        }
    });
    return studentsWithPositiveGPA;
}

console.log(filterPositiveGpa(students));