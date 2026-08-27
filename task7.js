// ============================================
// Task 7: Countdown Timer & Notification App
// Debugging Node Programs & Debugging Techniques (2 Marks)
// ============================================
//
// TASK REQUIREMENTS:
// -> Intentionally introduce a bug where the countdown never reaches
//    zero (e.g., a wrong comparison operator), then use `node --inspect`
//    or the VS Code debugger to find and fix it.
// -> Add a comment describing how you found and fixed the bug.
//
// BUGGY VERSION (for reference):
//   if (secondsLeft = 0) { ... }   // BUG: assignment (=) instead of
//                                  // comparison (===), so the exit
//                                  // condition never fires correctly.
//
// HOW IT WAS FOUND & FIXED:
// Ran `node --inspect task7.js` with the VS Code debugger attached,
// set a breakpoint inside the setInterval callback, and watched
// `secondsLeft` on each tick. Noticed it kept counting past 0 instead
// of stopping. Spotted the single "=" instead of "===" and fixed it.

// ---------------- CODE ----------------
let secondsLeft = 3;

const intervalId = setInterval(() => {
  console.log(secondsLeft);
  secondsLeft--;

  if (secondsLeft === 0) { // FIX: strict equality, not assignment
    clearInterval(intervalId);
    console.log("Done");
  }
}, 1000);

// ---------------- OUTPUT ----------------
// Command run: node task7.js
// Actual output (after ~3 seconds):
// 3
// 2
// 1
// Done
