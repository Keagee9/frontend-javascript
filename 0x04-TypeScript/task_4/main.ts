// task_4/js/main.ts

/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Create a teacher object
const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

const reactTeacher: Subjects.Teacher = {
  firstName: "Betty",
  lastName: "Holberton",
  experienceTeachingReact: 5,
};

const javaTeacher: Subjects.Teacher = {
  firstName: "Alice",
  lastName: "Wonder",
  experienceTeachingJava: 3,
};

const noExpTeacher: Subjects.Teacher = {
  firstName: "No",
  lastName: "Experience",
};


console.log("--- C++ Subject ---");
const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

cpp.setTeacher(noExpTeacher); // Teacher with no C experience
console.log(cpp.getAvailableTeacher());


console.log("\n--- React Subject ---");
const react = new Subjects.React();
react.setTeacher(reactTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

react.setTeacher(noExpTeacher); // Teacher with no React experience
console.log(react.getAvailableTeacher());


console.log("\n--- Java Subject ---");
const java = new Subjects.Java();
java.setTeacher(javaTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

java.setTeacher(noExpTeacher); // Teacher with no Java experience
console.log(java.getAvailableTeacher());


// To ensure console.log output is easily viewable in the browser,
// you can load this main.ts in an HTML file
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h1>Subjects and Teachers</h1>
        <p>Check the browser console for the output of Cpp, React, and Java subjects.</p>
    `;
    document.body.appendChild(outputDiv);
});