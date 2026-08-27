// ============================================
// Task 10: Countdown Timer & Notification App
// JavaScript Promises - Introduction, Detail & Revisited (2 Marks)
// ============================================
//
// TASK REQUIREMENTS:
// -> Rewrite `checkTimeLeftCallback` as a Promise-based function
//    `checkTimeLeftPromise(seconds)`.
// -> Chain `.then()`/`.catch()` to log the result or any error.

// ---------------- CODE ----------------
function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject(new Error("Invalid duration: seconds cannot be negative"));
      return;
    }

    setTimeout(() => {
      resolve(seconds);
    }, 1000);
  });
}

console.log("Checking time left (Promise-based)...");

// Successful case
checkTimeLeftPromise(5)
  .then((remaining) => {
    console.log(`Time left (from promise): ${remaining} seconds`);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });

// Failure case (negative duration), demonstrates .catch()
checkTimeLeftPromise(-3)
  .then((remaining) => {
    console.log(`Time left (from promise): ${remaining} seconds`);
  })
  .catch((err) => {
    console.error("Error (expected):", err.message);
  });

// ---------------- OUTPUT ----------------
// Command run: node task10.js
// Actual output (after ~1 second delay):
// Checking time left (Promise-based)...
// Time left (from promise): 5 seconds
// Error (expected): Invalid duration: seconds cannot be negative
