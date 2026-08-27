// ============================================
// Task 8: Countdown Timer & Notification App
// Asynchronous Programming & Callback Functions (2 Marks)
// ============================================
//
// TASK REQUIREMENTS:
// -> Write a callback-based function `checkTimeLeftCallback(seconds,
//    callback)` that simulates a delay using `setTimeout` before calling
//    back with the remaining time.
// -> Call it and log the result inside the callback.

// ---------------- CODE ----------------
function checkTimeLeftCallback(seconds, callback) {
  setTimeout(() => {
    callback(null, seconds); // Node-style callback: (error, result)
  }, 1000);
}

console.log("Checking time left (callback-based)...");

checkTimeLeftCallback(5, (err, remaining) => {
  if (err) {
    console.error("Error checking time left:", err);
    return;
  }
  console.log(`Time left (from callback): ${remaining} seconds`);
});

// ---------------- OUTPUT ----------------
// Command run: node task8.js
// Actual output (after ~1 second delay):
// Checking time left (callback-based)...
// Time left (from callback): 5 seconds
