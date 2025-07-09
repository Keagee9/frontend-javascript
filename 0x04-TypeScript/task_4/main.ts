// task_4/js/main.ts

/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Create and export constants for Cpp, Java, and React Subjects
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

// --- Cpp Subject ---
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// --- Java Subject ---
console.log("\nJava");
// Note: cTeacher does not have experienceTeachingJava, so it should return "No available teacher"
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// --- React Subject ---
console.log("\nReact");
// Note: cTeacher does not have experienceTeachingReact, so it should return "No available teacher"
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());


// To ensure console.log output is easily viewable in the browser,
// you can load this main.ts in an HTML file
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h1>Subjects and Teachers (Updated)</h1>
        <p>Check the browser console for the updated output of Cpp, Java, and React subjects.</p>
        <p>Specifically, observe how the 'getAvailableTeacher' method behaves when the teacher lacks specific experience for a subject (e.g., cTeacher for Java and React).</p>
    `;
    document.body.appendChild(outputDiv);
});