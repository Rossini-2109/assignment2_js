// const students = [
//   { name: "Rossini", dept: "CS", mark: 85 },
//   { name: "Sharvani", dept: "CS", mark: 90 },
//   { name: "Sandiya", dept: "ECE", mark: 78 }
// ];
// const filteredStudents = students.filter(s => s.mark > 80);
// console.log(filteredStudents);
// const pop = students.pop();
// console.log(pop);
// const push = students.push({ name: "Aslin", mark: 88 });
// console.log(push);
// console.log(students);

// const finder = students.find(s => s.name === "Sharvani");
// console.log(finder);
// students=["Rozz", "Aslin", "Sandyy"];
// students[0]="yazhini";
// console.log("Update:", students);


// students.push()

//reduce
const price = [120, 60, 899]
const total = price.reduce((acc, curr) => acc + curr, 0);
console.log(total);

//Find 
students=["Rozz", "Aslin", "Sandyy"];
const find = students.find(s => s === "Rozz");
console.log(find);

//closure
const Greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
const sayHello = Greet("Hello");
sayHello("Rossini");

//async
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
