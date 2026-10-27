export {};

interface Istudent {
  name: string;
  age: number;
  grade: number;
}

let studentName: string = 'Alamin';
let studentAge: number = 20;
let studentGrade: number = 3.4;

console.log('Name:', studentName);
console.log('Age:', studentAge);
console.log('Grade:', studentGrade);

let a: number = 30;
let b: number = 80;
let sum: number = a + b;
console.log('Sum:', sum);

console.log('Addition:', a + b);
console.log('Sub: ', a - b);

function getStudentName(): string {
  return 'hamim';
}
function getStudentAge(): number {
  return 16;
}
function getStudentGrade(): number {
  return 3.9;
}

function getStudentInfo(): Istudent {
  const student: Istudent = {
    name: getStudentName(),
    age: getStudentAge(),
    grade: getStudentGrade(),
  };
  console.log('InterFace');
  console.log('Student Name:', student.name);
  console.log('Student Age:', student.age);
  console.log('Student Grade:', student.grade);

  return student;
}

async function getStudentInfoAsync(): Promise<Istudent> {
  const student: Istudent = {
    name: getStudentName(),
    age: getStudentAge(),
    grade: getStudentGrade(),
  };
  console.log('Async Function');
  console.log('Student Name:', student.name);
  console.log('Student Age:', student.age);
  console.log('Student Grade:', student.grade);

  return student;
}

function fetchStudentInfo(): Promise<Istudent> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Hamim',
        age: 16,
        grade: 3.9,
      });
    }, 3000);
  });
}

async function main(): Promise<void> {
  getStudentInfo();
  await getStudentInfoAsync();
  console.log('Fetching student information.....');
  const student = await fetchStudentInfo();

  console.log('Student information rechived..... ');
  console.log(student);
}

main();
