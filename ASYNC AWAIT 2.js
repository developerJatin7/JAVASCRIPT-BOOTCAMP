// 1ST QUESTION PROBLEM
// function greet(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello async/await");
//         }, 1000);
//     });
// }

// async function main(){
//     const message = await greet();
//     console.log(message);
// }
// main();

// 3RD QUESTION PROBLEM
//  function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully!");
//         }, 1000);
//     });
// }

// async function main(){
//     try {
//         const data = await fetchData();
//         console.log(data);
//     }
//     catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// main();

// 2ND QUESTION PROBLLEM
// function workprocess1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Done");
//         }, 2000);
//     });
// }

// async function main(){
//     console.log("Starting work process...");
//     const result = await workprocess1();
//     console.log(result);
// }
// main();

// 4TH QUESTION PROBLEM
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error occured");
//         }, 1000);
//     })
// }

// async function main() {
//     try{
//         const data = await fetchData();
//         console.log(data);
//     }
//     catch(error){
//         console.log("error fetching data:", error);
//     }
// }
// main();

// 5TH QUESTION PROBLEM
