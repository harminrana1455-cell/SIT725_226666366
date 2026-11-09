
// SIT725 - Task 1.1P
// JavaScript Fundamentals

// 1. Variables and Data Types
const studentName = "Harmin Rana";
const studentAge = 23;
const isEnrolled = true;

console.log("=== Variables and Data Types ===");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Enrolled:", isEnrolled);
console.log("Name data type:", typeof studentName);
console.log("Age data type:", typeof studentAge);

// 2. Conditional Statements
console.log("\n=== Conditional Statements ===");

const marks = 85;

if (marks >= 80) {
    console.log("Grade: High Distinction");
} else if (marks >= 70) {
    console.log("Grade: Distinction");
} else if (marks >= 60) {
    console.log("Grade: Credit");
} else if (marks >= 50) {
    console.log("Grade: Pass");
} else {
    console.log("Grade: Fail");
}

// 3. For Loop
console.log("\n=== For Loop ===");

for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// 4. Functions
console.log("\n=== Functions ===");

function calculateSum(a, b) {
    return a + b;
}

console.log("Sum of 15 and 25:", calculateSum(15, 25));

// 5. Arrays
console.log("\n=== Arrays ===");

const technologies = ["JavaScript", "Node.js", "React.js", "MongoDB"];

technologies.forEach(function (technology) {
    console.log(technology);
});
