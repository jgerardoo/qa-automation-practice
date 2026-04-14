/* 
Practice Exercise
Task:
1. Create a file called control_flow_loops_practice.js
2. Create an array of 5 different test names
3. Loop through them using for...of
4. For each test, randomly assign pass or fail using a boolean variable
5. Use an if statement to print "passed" or "failed" for each test
6. Bonus: Use a switch statement to handle three possible outcomes: "passed", "failed", or "skipped"
*/

// Exercise using for...of loop
const testCases1 = ["Log in", "Log out", "Forget pwd", "Wrong pwd", "Sign up"];

for (let test of testCases1) {
    const passed = Math.random() > 0.5;
    if (passed) {
        console.log(test + " test passed");
    } else {
        console.log(test + " test failed");
    }
}    

console.log("------------------------");
console.log("------------------------");

// Exercise using switch statement
const testCases2 = ["Log in", "Log out", "Forget pwd", "Wrong pwd", "Sign up"];
const outcomes = ["passed", "failed", "skipped"];

for (let test of testCases2) {
    const result = outcomes[Math.floor(Math.random() * 3)]; // Randomly select "passed", "failed", or "skipped"
        switch (result) {
            case "passed":
                console.log(test + " test passed");
                break;
            case "failed":
                console.log(test + " test failed");
                break;
            case "skipped":
                console.log(test + " test skipped");
                break;
        }
}

console.log("------------------------");
console.log("------------------------");

// Appendix - Understanding the logic for generating random numbers
const random = Math.floor(Math.random() * 10);  // Returns 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9
console.log(random);

const dice = Math.floor(Math.random() * 6) + 1; // Returns 1, 2, 3, 4, 5, or 6
console.log(dice);

const randomNumber = Math.random();     // e.g. 0.731
const passed = randomNumber > 0.5;      // true or false
console.log(passed);