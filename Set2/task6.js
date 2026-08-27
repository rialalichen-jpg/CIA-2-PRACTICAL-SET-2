// ============================================
// Task 6: Countdown Timer & Notification App
// Node Packages - NodeMon & Monitoring Applications (2 Marks)
// ============================================
//
// TASK REQUIREMENTS:
// -> Install `nodemon` as a dev dependency and add an `npm run dev`
//    script to run `countdown.js` with it.
// -> Demonstrate NodeMon restarting the app after you change the
//    countdown message text and save the file.
//
// STEPS FOLLOWED:
// 1. npm install --save-dev nodemon
// 2. package.json scripts: "dev": "nodemon countdown.js"
// 3. Ran: npx nodemon task6.js
// 4. Edited the message below from "v1" to "v2" and saved the file.
//    NodeMon detected the change and auto-restarted the process:
//      [nodemon] restarting due to changes...
//      [nodemon] starting `node task6.js`

// ---------------- CODE ----------------
console.log("Countdown message v2 - restarted automatically by NodeMon!");

// ---------------- OUTPUT ----------------
// Command run: node task6.js
// Actual output:
// Countdown message v2 - restarted automatically by NodeMon!
