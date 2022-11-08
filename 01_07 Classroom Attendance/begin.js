/*
  WRITE YOUR SOLUTION HERE
*/
let a,b,rest;
[a,b,...rest] = [20, 30, 35, 65,65,5334]
console.log(a) // output 20
console.log(b) // output 30
console.log(rest)

function getStudent(classroom) {
  let {hasTeachingAssistant, classList} = classroom;
  let teacher, teachingAssistant, students;
  if(hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList
  } else {
    [teacher, ... students] = classList
  }
  return students
}
console.log(getStudent({
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
}))
