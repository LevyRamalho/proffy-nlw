const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"

]
//alterando
 function getSubject(subjectNumber){
    const position = + subjectNumber - 1
    return subjects [position];
};
//  function getsubject(subjectNumber){
//     const position = +subjectNumber - 1
//     return subjects [position]
// }

function convertHoursToMinutes(time){
  const [hour, minutes] =  time.split(":")
  return Number ((hour * 60) + minutes)
}


module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}