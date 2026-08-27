// ============================================
// Task 4: Countdown Timer & Notification App
// NodeJS REPL Introduction (2 Marks)
// ============================================
//
// TASK REQUIREMENTS:
// -> In the Node REPL, test a small snippet that calculates the seconds
//    remaining between two `Date` objects.
// -> Move the working snippet into `countdown.js`.
//
// REPL SNIPPET TESTED:
// > const start = new Date();
// > const end = new Date(start.getTime() + 10000);
// > Math.round((end - start) / 1000)
// 10

// ---------------- CODE ----------------
function getSecondsRemaining(startDate, endDate) {
  const diffInMs = endDate.getTime() - startDate.getTime();
  return Math.round(diffInMs / 1000);
}

const start = new Date();
const end = new Date(start.getTime() + 10000); // +10,000 ms = 10 seconds

const secondsRemaining = getSecondsRemaining(start, end);
console.log(`Seconds remaining between the two Date objects: ${secondsRemaining}`);

// ---------------- OUTPUT ----------------
// Command run: node task4.js
// Actual output:
// Seconds remaining between the two Date objects: 10
