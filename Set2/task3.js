// ============================================
// Task 3: Countdown Timer & Notification App
// NodeJS Resources & Working with NodeJS Examples (2 Marks)
// ============================================
//
// TASK REQUIREMENTS:
// -> Refer to the official Node.js documentation for the `timers` module
//    and list, as a comment, the method names you used.
// -> Adapt one example from the docs to build a basic countdown using
//    `setInterval`.
//
// Reference: https://nodejs.org/api/timers.html
// Methods used: setInterval(callback, delay), clearInterval(intervalId)

// ---------------- CODE ----------------
let secondsLeft = 5;

console.log(`Countdown starting from ${secondsLeft}...`);

const intervalId = setInterval(() => {
  console.log(secondsLeft);
  secondsLeft--;

  if (secondsLeft < 0) {
    clearInterval(intervalId);
    console.log("Countdown complete!");
  }
}, 1000);

// ---------------- OUTPUT ----------------
// Command run: node task3.js
// Actual output (after ~5 seconds):
// Countdown starting from 5...
// 5
// 4
// 3
// 2
// 1
// 0
// Countdown complete!
