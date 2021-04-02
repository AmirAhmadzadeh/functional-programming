// code

//////////////////////////////////////////// ex-1

//function addNumbers(x = 0, y = 0, z = 0, w = 0) {
//var total = x + y + z + w;
//console.log(total);
//}

//function extraAdd(x = 2, ...args) {
//return addNumbers(x, 40, ...args);
//}

//extraAdd(); // 42
//extraAdd(4, 5, 6); // 55

////////////////////////////////////////////////ex-1 soul
// f(x) = x^2 + 87x

//function addNumbers(x = 0, y = 0, z = 0, w = 0) {
//const total = x + y + z + w;
//return total;
//}

//function extraAdd(x = 2, ...args) {
//return addNumbers(x, 40, ...args);
//}

//const res = extraAdd(); // 42
//const res2 = extraAdd(4, 5, 6); // 55

////console.log(res, res2);

////fn : realation between output and input

//function tuple(x, y) {
//return [x - 1, y - 1];
//}

//const [a, b] = tuple(...[5, 45]);
//// a  = 4  b = 45

///////////////////////////////////////////////////////ex-1

//const studentsEx = [
//{ name: "xxxx", id: 68 },
//{ name: "yyy", id: 54 },
//{ name: "sss", id: 120 },
//{ name: "aaaa", id: 12 },
//{ name: "wwww", id: 10 },
//{ name: "yyy", id: 98 },
//];

//function sortStudentsByName() {
//studentsEx.sort((s1, s2) => {
//if (s1.name > s2.name) return 1;
//else if (s1.name < s2.name) return -1;
//else return 0;
//});

//return;
//}

//function sortStudentsById() {
//studentsEx.sort((s1, s2) => {
//return s1.id - s2.id;
//});
//return studentsEx;
//}

////console.log("sortStudentsByName", sortStudentsByName());
////console.log("sortStudentsById", sortStudentsById());
////
////solution -1

//const students = [
//{ name: "xxxx", id: 68 },
//{ name: "yyy", id: 54 },
//{ name: "sss", id: 120 },
//{ name: "aaaa", id: 12 },
//{ name: "wwww", id: 10 },
//{ name: "yyy", id: 98 },
//];

//function sortStudentsByName(students) {
//let _students = [...students];
//_students.sort((s1, s2) => {
//if (s1.name > s2.name) return 1;
//else if (s1.name < s2.name) return -1;
//else return 0;
//});

//return _students;
//}

//function sortStudentsById(students) {
//let _students = [...students];
//_students.sort((s1, s2) => {
//return s1.id - s2.id;
//});
//return _students;
//}

//const sorted = sortStudentsByName(students);
//console.log("sorted", sorted, students);
//
//
//
//
//////// bad soulutioon
const studentsSol2 = [
  { name: "xxxx", id: 68 },
  { name: "yyy", id: 54 },
  { name: "sss", id: 120 },
  { name: "aaaa", id: 12 },
  { name: "wwww", id: 10 },
  { name: "yyy", id: 98 },
];

//function studentsOpreation(students) {
//function sortStudentsByName() {
//let _students = [...students];
//_students.sort((s1, s2) => {
//if (s1.name > s2.name) return 1;
//else if (s1.name < s2.name) return -1;
//else return 0;
//});

//return _students;
//}

//function sortStudentsById() {
//let _students = [...students];
//_students.sort((s1, s2) => {
//return s1.id - s2.id;
//});
//return _students;
//}

//return { sortStudentsById, sortStudentsByName };
//}

//const { sortStudentsByName, sortStudentsById } = studentsOpreation(
//studentsSol2
//);

//console.log(sortStudentsByName(), sortStudentsById());

// solution wrapper
//const students = [
//{ name: "xxxx", id: 68 },
//{ name: "yyy", id: 54 },
//{ name: "sss", id: 120 },
//{ name: "aaaa", id: 12 },
//{ name: "wwww", id: 10 },
//{ name: "yyy", id: 98 },
//];

//function getStudentsByName(students) {
//students = [...students];
//return sortStudentsByName();

//function sortStudentsByName() {
//students.sort((s1, s2) => {
//if (s1.name > s2.name) return 1;
//else if (s1.name < s2.name) return -1;
//else return 0;
//});

//return students;
//}
//}

//function getStudentsById(students) {
//students = [...students];
//return sortStudentsById();

//function sortStudentsById() {
//students.sort((s1, s2) => {
//return s1.id - s2.id;
//});
//return students;
//}
//}

//adapter  ;
let students = [
  { name: "xxxx", id: 68 },
  { name: "yyy", id: 54 },
  { name: "sss", id: 120 },
  { name: "aaaa", id: 12 },
  { name: "wwww", id: 10 },
  { name: "yyy", id: 98 },
];

function getStudentsByName(currStudnets) {
  let orgStudents = [...students];
  students = [...currStudnets];
  const newStudents = sortStudentsByName();
  students = orgStudents;
  return newStudents;
}

function sortStudentsByName() {
  students.sort((s1, s2) => {
    if (s1.name > s2.name) return 1;
    else if (s1.name < s2.name) return -1;
    else return 0;
  });
  return students;
}

function getStudentsById(currStudnets) {
  const orgStudents = [...students];
  students = [...currStudnets];
  const newStudents = sortStudentsById();
  students = orgStudents;
  return newStudents;
}

function sortStudentsById() {
  students.sort((s1, s2) => {
    return s1.id - s2.id;
  });
  return students;
}

console.log("getStudentsByName", getStudentsByName(students), students);
console.log("getStudentsById", getStudentsById(students), students);
