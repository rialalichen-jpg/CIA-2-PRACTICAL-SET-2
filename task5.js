// ============================================
// Task 5: Countdown Timer & Notification App
// Node Process Object, Command Line & Terminal I/O (2 Marks)
// ============================================
//
// TASK REQUIREMENTS:
// -> Modify `countdown.js` to accept the countdown duration (in seconds)
//    as a command-line argument via `process.argv`.
// -> Use `process.stdin` to let the user type "cancel" to stop the
//    countdown early.

// ---------------- CODE ----------------
const argDuration = parseInt(process.argv[2], 10);
let secondsLeft = Number.isNaN(argDuration) ? 10 : argDuration;

console.log(`Starting countdown from ${secondsLeft} seconds.`);
console.log('Type "cancel" and press Enter at any time to stop early.');

let cancelled = false;

process.stdin.setEncoding("utf8");
process.stdin.on("data", (input) => {
  const command = input.toString().trim().toLowerCase();
  if (command === "cancel") {
    cancelled = true;
    console.log("Countdown cancelled by user.");
    clearInterval(intervalId);
    process.stdin.pause();
  }
});

const intervalId = setInterval(() => {
  if (cancelled) return;

  console.log(secondsLeft);
  secondsLeft--;

  if (secondsLeft < 0) {
    clearInterval(intervalId);
    console.log("Time's up!");
    process.stdin.pause();
  }
}, 1000);

// ---------------- OUTPUT ----------------
// Command run: node task5.js 15   (then typed "cancel" after ~2 seconds)
// Actual output:
// Starting countdown from 15 seconds.
// Type "cancel" and press Enter at any time to stop early.
// 15
// 14
// Countdown cancelled by user.
