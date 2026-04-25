// function add(a, b) {
//   return a + b;
// }

// let result = add(2);
// console.log(result);

// function test() {
//   console.log("Hello");
// }

// let x = test();
// console.log(x);

// function greet(name = "Guest") {
//   return "Hello " + name;
// }
// console.log(greet(null));

// function check(num) {
//   if (num > 10) return "Big";
//   return "Small";
// }

// console.log(check(15));


// function add(a, b) {
//   return a + b;
// }
//  const result = add(2, 3);
//  console.log(result);

// function num(a) {
//   if (a%2 === 0) return "Even";
//   return "Odd";
// }
// console.log(num(5));

// function greet(name = "Guest") {
//   return `Hello ${name}`;
// }
// console.log(greet(null));

// const user = { name: "Jatin" };

// function change(obj) {
//   obj = { name: "Rahul" };
// }

// change(user);
// console.log(user.name);

// let x = 5;

// function outer() {
//   console.log(x);

//   let x = 10;

//   function inner() {
//     console.log(x);
//   }

//   inner();
// }

// outer();

// let a = 5;

// function test() {
//   console.log(a);
// }

// test();

// let a = 10;

// {
//   let a = 20;
//   console.log(a);
// }

// console.log(a);

// const a = 5;

// function test() {
//   console.log(a);
// }

// test();

// const a = 10;

// function outer() {
//   function inner() {
//     console.log(a);
//   }

//   const a = 20;

//   inner();
// }

// outer(); 

// let a = 50;

// {
//   let b = a;
//   console.log(b);
// }

// G
// const obj = {
//   name: "Jatin",
//   fn() {
//     const inner = () => {
//       return function () {
//         console.log(this.name);
//       };
//     };
//     return inner();
//   }
// };

// const x = obj.fn();
// x();

// const obj = {
//   name: "Jatin",
//   fn() {
//     return () => {
//       console.log(this.name);
//     };
//   }
// };

// const x = obj.fn;
// x()();

// const obj = {
//   name: "Jatin",
//   fn() {
//     return () => {  // Arrow function now
//       return () => {
//         console.log(this.name);
//       };
//     };
//   }
// };

// obj.fn()()();  // Now logs "Jatin"

// const obj2 = {
//   name: "Rahul",
//   fn() {
//     return () => {
//       console.log(this.name);
//     }
//   }
// };
// obj2.fn()();  // Logs "Rahul"

// const obj3 = {
//   name: "Jatin",
//   fn() {
//     const inner = () => {
//       return () => {  // Changed to arrow
//         return () => {
//           console.log(this.name);
//         };
//       };
//     };
//     return inner();
//   }
// };

// obj3.fn()()();  // Now correctly logs "Jatin"

// const obj4 = {
//   name: "Jatin",
//   fn() {
//     return function(){
//       return()=>{
//         console.log(this.name);
//       }
//     }
//   }
// };
// obj4.fn()()();  // Logs "undefined" because 'this' in the regular function does not refer to obj4

// const add = (a, b) => a + b;
// console.log(add(2, 3));

// const num = a => (a % 2 === 0 ? "Even" : "Odd");
// console.log(num(5));
// const greet = (name = "Guest") => `Hello ${name}`;
// console.log(greet(null));

// const obj5= {
//   name: "Jatin",
//   fn() {
//     return function() {
//       return () => {
//         console.log(this.name);
//       }
//     }.bind(this);  // Bind 'this' to the regular function
//   }
// };
// obj5.fn()()();  // Now correctly logs "Jatin"

const globalVar = "I am global";

function outer() {
  const outerVar = "I am in outer";

  function inner() {
    const innerVar = "I am in inner";
    console.log(globalVar); // works
    console.log(outerVar);  // works
    console.log(innerVar);  // works
  }

  inner();
  // console.log(innerVar); // Error: innerVar is not defined
}

outer();

console.log("\n--- Closure Example: Counter ---");

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Counter value:", count);
  };
}

const counterA = makeCounter();
counterA();
counterA();

const counterB = makeCounter();
counterB();

console.log("\n--- Closure Example: Function Factory ---");

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log("double(10):", double(10));
console.log("triple(10):", triple(10));

console.log("\n--- Closure in Loops: var vs let ---");

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("var i:", i);
  }, 10);
}

for (let j = 1; j <= 3; j++) {
  setTimeout(function () {
    console.log("let j:", j);
  }, 20);
}

console.log("\n--- this: Normal Function vs Arrow Function ---");

const userThisDemo = {
  name: "Jatin",
  normal() {
    console.log("normal() ->", this.name);
  },
  arrow: () => {
    console.log("arrow() ->", this && this.name);
  }
};

userThisDemo.normal();
userThisDemo.arrow();

console.log("\n--- Practice Solution: Password Manager (Closure) ---");

function createPasswordManager() {
  let password = "";

  return {
    setPassword(newPass) {
      password = newPass;
      console.log("Password set successfully");
    },
    checkPassword(input) {
      return input === password;
    }
  };
}

const manager = createPasswordManager();
manager.setPassword("abc123");
console.log("check '123':", manager.checkPassword("123"));
console.log("check 'abc123':", manager.checkPassword("abc123"));
// console.log(password); // Error: password is private due to closure
