// ============================================
// Task 9: Countdown Timer & Notification App
// Node Timers & Global Objects (2 Marks)
// ============================================
//
// TASK REQUIREMENTS:
// -> Use `setInterval` to print the remaining seconds every second,
//    stopping it with `clearInterval` exactly when the countdown
//    reaches zero.
// -> Use a separate `setTimeout` to trigger a "Time's up!" notification
//    once the countdown ends.

// ---------------- CODE ----------------
let secondsLeft = 5;

console.log(`Countdown starting from ${secondsLeft} seconds...`);

const intervalId = setInterval(() => {
  console.log(secondsLeft);

  if (secondsLeft === 0) {
    clearInterval(intervalId);

    setTimeout(() => {
      console.log("🔔 Notification: Time's up!");
    }, 500);
  }

  secondsLeft--;
}, 1000);

// ---------------- OUTPUT ----------------
// Command run: node task9.js
// Actual output (after ~5.5 seconds):
// Countdown starting from 5 seconds...
// 5
// 4
// 3
// 2
// 1
// 0
// 🔔 Notification: Time's up!
