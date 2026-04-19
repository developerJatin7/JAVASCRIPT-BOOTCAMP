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