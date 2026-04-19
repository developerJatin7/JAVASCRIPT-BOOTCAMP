// ============================================
// ASYNC/AWAIT - BEGINNER TO ADVANCED GUIDE
// ============================================

// ============================================
// LEVEL 1: WHAT IS ASYNC/AWAIT?
// ============================================
// Async/Await is a way to handle asynchronous code that looks synchronous
// It makes working with promises easier and more readable
// async function = a function that returns a Promise
// await = pauses execution until a Promise is resolved

console.log("========== LEVEL 1: BASICS ==========\n");

// Before async/await, we used .then() and callbacks
// This is called the "callback hell" or "pyramid of doom"
/*
function oldWay() {
  fetchData().then(data => {
    processData(data).then(result => {
      saveData(result).then(success => {
        console.log("Done!");
      });
    });
  });
}
*/

// With async/await, becomes much cleaner:
async function betterWay() {
  const data = await fetchData();
  const result = await processData(data);
  const success = await saveData(result);
  console.log("Done!");
}

// Simple simulation functions for examples
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John", age: 30 });
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...data, processed: true });
    }, 500);
  });
}

function saveData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
}

// ============================================
// LEVEL 2: BASIC ASYNC FUNCTION
// ============================================

console.log("========== LEVEL 2: BASIC ASYNC FUNCTION ==========\n");

// Most basic async function
async function greeting() {
  return "Hello!"; // This automatically returns a Promise
}

// When you call an async function, you get a Promise
greeting().then(result => {
  console.log("Level 2 Result:", result);
});

// An async function with await
async function getUserInfo() {
  const user = await fetchData(); // Wait for the promise to resolve
  console.log("User fetched:", user);
  return user;
}

// getUserInfo(); // Uncomment to run

// IMPORTANT: To use 'await', the function MUST be 'async'
// This will NOT work:
// function normalFunction() {
//   const user = await fetchData(); // ERROR!
// }

// ============================================
// LEVEL 3: HANDLING ERRORS WITH TRY-CATCH
// ============================================

console.log("========== LEVEL 3: ERROR HANDLING ==========\n");

// When a Promise rejects, we need to catch the error
// Use try-catch block (similar to other languages)

function simulateErrorAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("API is down!"));
    }, 500);
  });
}

async function safeAPICall() {
  try {
    console.log("Attempting API call...");
    const result = await simulateErrorAPI();
    console.log("Success:", result);
  } catch (error) {
    console.log("Error caught:", error.message);
  }
}

// safeAPICall(); // Uncomment to run 

// You can also add a finally block (optional)
async function safeAPICallWithFinally() {
  try {
    console.log("Starting request...");
    const result = await simulateErrorAPI();
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Request finished (success or failure)");
  }
}

// safeAPICallWithFinally(); // Uncomment to run
     
// ============================================
// LEVEL 4: MULTIPLE AWAITS
// ============================================

console.log("========== LEVEL 4: MULTIPLE AWAITS ==========\n");

// Sequential execution (one after another)
async function    sequentialFetch() {
  console.log("Sequential: Fetching first user...");
  const user1 = await fetchData();
  console.log("Sequential: First user:", user1);

  console.log("Sequential: Fetching second user...");
  const user2 = await fetchData();
  console.log("Sequential: Second user:", user2);

  return [user1, user2];
}

// sequentialFetch(); // Uncomment to run
// Note: Sequential takes about 2 seconds (1s + 1s)

// Parallel execution (at the same time) - MUCH FASTER
async function parallelFetch() {
  console.log("Parallel: Fetching both users at the same time...");

  // Start both fetches immediately
  const promise1 = fetchData();
  const promise2 = fetchData();

  // Wait for both to complete
  const [user1, user2] = await Promise.all([promise1, promise2]);

  console.log("Parallel: First user:", user1);
  console.log("Parallel: Second user:", user2);

  return [user1, user2];
}

parallelFetch(); // Uncomment to run
// Note: Parallel takes about 1 second (not 2!)

// ============================================
// LEVEL 5: PROMISE.ALL vs PROMISE.RACE
// ============================================

console.log("========== LEVEL 5: PROMISE COMBINATORS ==========\n");

// Promise.all = Wait for ALL promises to complete
async function withPromiseAll() {
  try {
    const [data1, data2, data3] = await Promise.all([
      fetchData(),
      fetchData(),
      fetchData()
    ]);
    console.log("Promise.all: All completed!");
  } catch (error) {
    console.log("Promise.all: One failed, so everything fails");
  }
}

withPromiseAll(); // Uncomment to run

// Promise.race = Wait for FIRST promise to complete
function slowFetch() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Slow result"), 5000);
  });
}

function fastFetch() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Fast result"), 100);
  });
}

async function withPromiseRace() {
  const result = await Promise.race([slowFetch(), fastFetch()]);
  console.log("Promise.race result (fastest wins):", result);
}

withPromiseRace(); // Uncomment to run

// Promise.allSettled = Wait for all, even if some fail
async function withAllSettled() {
  const results = await Promise.allSettled([
    fetchData(),
    simulateErrorAPI(),
    fetchData()
  ]);

  console.log("AllSettled results:");
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`  Promise ${index}: ✓ Resolved with`, result.value);
    } else {
      console.log(`  Promise ${index}: ✗ Rejected with`, result.reason.message);
    }
  });
}

withAllSettled(); // Uncomment to run

// ============================================
// LEVEL 6: LOOPING WITH ASYNC/AWAIT
// ============================================

console.log("========== LEVEL 6: LOOPING ==========\n");

// WRONG WAY: Unintended Sequential
async function loopWrong() {
  console.log("\nWRONG: Sequential loop (slow)");
  const users = [];

  // This will wait for each one to complete before starting the next!
  for (let i = 0; i < 3; i++) {
    const user = await fetchData();
    users.push(user);
  }

  console.log("Got users:", users);
  return users;
}

// loopWrong(); // Takes ~3 seconds

// RIGHT WAY 1: Using Promise.all
async function loopRight1() {
  console.log("\nRIGHT 1: Parallel with map + Promise.all (fast)");
  const promises = [];

  for (let i = 0; i < 3; i++) {
    promises.push(fetchData());
  }

  const users = await Promise.all(promises);
  console.log("Got users:", users);
  return users;
}

// loopRight1(); // Takes ~1 second

// RIGHT WAY 2: Concise with map directly
async function loopRight2() {
  console.log("\nRIGHT 2: Map + Promise.all (cleanest)");
  const users = await Promise.all(
    [1, 2, 3].map(() => fetchData())
  );
  console.log("Got users:", users);
  return users;
}

// loopRight2(); // Takes ~1 second

// ============================================
// LEVEL 7: ASYNC IIFE (Complex)
// ============================================

console.log("========== LEVEL 7: ASYNC IIFE ==========\n");

// IIFE = Immediately Invoked Function Expression
// Async IIFE lets you use await at "top level"

(async () => {
  console.log("This runs immediately and is async!");
  const user = await fetchData();
  console.log("User in IIFE:", user);
})();

// ============================================
// LEVEL 8: REAL WORLD EXAMPLE - API CALLS
// ============================================

console.log("========== LEVEL 8: REAL WORLD API EXAMPLE ==========\n");

// Simulating a real API-like function
function fetchUserFromAPI(userId) {
  return new Promise((resolve, reject) => {
    if (!userId) {
      reject(new Error("User ID is required"));
    }

    setTimeout(() => {
      resolve({
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`
      });
    }, 800);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: `Post 1 by User ${userId}` },
        { id: 2, title: `Post 2 by User ${userId}` }
      ]);
    }, 600);
  });
}

// Complete real-world example
async function getUserWithPosts(userId) {
  try {
    console.log(`\nFetching user ${userId} and their posts...`);

    // Fetch user first
    const user = await fetchUserFromAPI(userId);
    console.log("User found:", user);

    // Then fetch their posts
    const posts = await fetchUserPosts(userId);
    console.log("Posts found:", posts);

    return {
      user,
      posts,
      totalPosts: posts.length
    };
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}

// getUserWithPosts(1); // Uncomment to run

// Better: Fetch user AND posts in PARALLEL
async function getUserWithPostsOptimized(userId) {
  try {
    console.log(`\nFetching user ${userId} and posts in PARALLEL...`);

    const user = await fetchUserFromAPI(userId);

    // Don't need to wait for user to get posts - start both at once!
    const [userAgain, posts] = await Promise.all([
      fetchUserFromAPI(userId), // or just use the 'user' variable
      fetchUserPosts(userId)
    ]);

    return { user, posts };
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}

// getUserWithPostsOptimized(1); // Uncomment to run

// ============================================
// LEVEL 9: HANDLING MULTIPLE ERRORS
// ============================================

console.log("========== LEVEL 9: ADVANCED ERROR HANDLING ==========\n");

async function complexErrorHandling(userId) {
  try {
    const user = await fetchUserFromAPI(userId);
    const posts = await fetchUserPosts(userId);

    return { user, posts };
  } catch (error) {
    // Different handling based on error type
    if (error.message.includes("required")) {
      console.log("Validation Error:", error.message);
    } else if (error.message.includes("404")) {
      console.log("Not Found:", error.message);
    } else {
      console.log("Generic Error:", error.message);
    }

    throw error; // Re-throw if you want caller to handle it too
  }
}

// ============================================
// LEVEL 10: TIMEOUT WITH ASYNC
// ============================================

console.log("========== LEVEL 10: TIMEOUT PATTERN ==========\n");

function createTimeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`Timed out after ${ms}ms`)), ms);
  });
}

async function fetchWithTimeout(userId, timeLimit = 3000) {
  try {
    const result = await Promise.race([
      fetchUserFromAPI(userId),
      createTimeout(timeLimit)
    ]);
    return result;
  } catch (error) {
    console.log("Request failed:", error.message);
    return null;
  }
}

// fetchWithTimeout(1, 5000); // 5 second timeout

// ============================================
// QUICK REFERENCE
// ============================================

console.log(`
========== QUICK REFERENCE ==========

1. async function = automatically returns a Promise
2. await = pauses execution until Promise resolves
3. Use try-catch for error handling
4. Sequential (one after another): await one, then await next
5. Parallel (at same time): create all promises, then Promise.all()
6. Promise.all() = wait for ALL promises
7. Promise.race() = wait for FIRST promise
8. Promise.allSettled() = wait for ALL, even if some fail
9. Always use .catch() or try-catch to handle rejections

KEY PATTERN:
async function name() {
  try {
    const result = await somePromise();
    return result;
  } catch (error) {
    console.log("Error:", error);
  }
}
`);
