// ============================================
// Task 2: Countdown Timer & Notification App
// Understanding How Node.js Works & Node.js Architecture (2 Marks)
// ============================================
//
// TASK REQUIREMENTS:
// -> Add a comment explaining how V8 and libuv let `countdown.js` keep
//    accepting terminal input while a timer runs in the background.
// -> Demonstrate this by starting a `setTimeout` and immediately printing
//    another message before the timer fires.
//
// EXPLANATION:
// V8 is the JavaScript engine that runs our JS code on a single main
// thread. libuv is the C library behind Node that provides the event
// loop and a thread pool. When we call setTimeout(), Node hands the
// timer off to libuv instead of blocking the main thread. V8 keeps
// executing the rest of the synchronous code immediately, so the
// terminal stays responsive (e.g. can still read stdin) while the timer
// counts down in the background. Once the delay expires, libuv queues
// the callback to run via the event loop.

// ---------------- CODE ----------------
console.log("Starting a background timer...");

setTimeout(() => {
  console.log("Timer fired after 2 seconds (handled by libuv's event loop)");
}, 2000);

// This line runs immediately, BEFORE the timer above fires.
console.log("This message prints immediately, while the timer is still pending in the background.");

// ---------------- OUTPUT ----------------
// Command run: node task2.js
// Actual output:
// Starting a background timer...
// This message prints immediately, while the timer is still pending in the background.
// Timer fired after 2 seconds (handled by libuv's event loop)
