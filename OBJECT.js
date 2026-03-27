// let book = {
//     title: "GOT",
//     author: "George R.R. Martin",
//     year: 1996
// };
// console.log(book.title); // Output: GOT
// console.log(book.author);

// let student = {
//     name: "John",
//     marks: 80,
//     grade:"A",
//     isPassed: true
// };
// student.marks = 85; // Updating marks
// student.grade = "A+"; // Updating grade
// student.name = "John Doe"; // Updating name
// console.log(student.marks);
// console.log(student.grade);
// console.log(student.name);

// const movie = {
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010,
//     greet: function() {
//         console.log("Welcome to the world of " + this.title);
//     }
// };
// movie.greet(); // Output: Welcome to the world of Inception

// const user = {
//     username: "johndoe",
//     email: "jondoegmail.com",
//     Sayhello: function() {
//         console.log("Hello, " + this.username + "!");
//     },
//     login: function() {
//         console.log( `${this.username} You have logged in succesfully `);
//     }
// };
// user.Sayhello();
// user.login();

// const calculator = {
//     num1: 3,
//     num2: 4,
//     add: function() {
//         return this.num1 + this.num2;
//     },
// };
// console.log(calculator.add()); // Output: 7
// calculator.num3 = 5; // Adding a new property
// console.log(calculator.num3); // Output: 5
// console.log(calculator); // Output: { num1: 3, num2: 4, add: [Function], num3: 5 }
// calculator.multiply = function() {
//     return this.num1 * this.num2;
// };
// console.log(calculator.multiply()); // Output: 12
// console.log(calculator); // Output: { num1: 3, num2: 4, add: [Function], num3: 5, multiply: [Function] }

// let book = {
//   title: "Atomic Habits",
//   author: "James Clear"
// };
// console.log(book.author); // Output: James Clear
// book.year = 2018; // Adding a new property
// console.log(book.year); // Output: 2018
// console.log(book); // Output: { title: 'Atomic Habits', author: 'James Clear', year: 2018 }

// let phone = {
//   brand: "Samsung",
//   price: 20000
// };
// phone.price = 18000; // Updating the price
// console.log(phone.price); // Output: 18000
// phone.color = "chrome"; // Adding a new property
// console.log(phone.color); // Output: chrome
// console.log(phone); // Output: { brand: 'Samsung', price: 18000, color: 'chrome' }

// let scores = {
//   math: 80,
//   science: 70,
//   english: 90
// };
// let total = 0;
// for(let key in scores) {
//     total+=scores[key];
// }
// console.log(total); // Output: 240

// let student = {
//   name: "Jatin",
//   subjects: ["Math", "Science", "English"]
// };
// for(let subject of student.subjects) {
//     console.log(subject);
// }

let employees = [
  { name: "A", salary: 20000 },
  { name: "B", salary: 30000 },
  { name: "C", salary: 25000 }
];
for(let employee of employees) {
    if(employee.salary > 22000) {
        console.log(employee.name); // Output: B, C
    }
}
