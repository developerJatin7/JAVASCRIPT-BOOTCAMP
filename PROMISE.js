//  // Promise rejection
// const myPromise = new Promise((resolve, reject) => {
//     const success = false;
//     if (success) {
//         resolve("It worked!");
//     } else {
//         reject("Something failed!");
//     }
// });

// myPromise
//     .then((value) => {
//         console.log(value); // SKIPPED
//     })
//     .catch((error) => {
//         console.log(error); // "Something failed!"
//     })
//     .finally(() => {
//         console.log("Done either way!");
//     });

    // Promise resolve
    const myPromise2 = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("It worked!");
    } else {
        reject("Something failed!");
    } });

myPromise2
.then((value) => {
    console.log(value); // "It worked!" 
})
.catch((error) => {
    console.log(error); // SKIPPED
})
.finally(()=> {
    console.log("Done either way!"); // "Done either way!"
}); 

// Promise chaining
const myPromise3 = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve(5);
    } else {
        reject("Something failed!");
    }
});

myPromise3
.then((value) => {
    console.log(value); // 5
    return value * 2;
})
.then((newValue) => {
    console.log(newValue); // 10
})
.catch((error) => {
    console.log(error); // SKIPPED
})
.finally(() => {
    console.log("Done either way!"); // "Done either way!"
});