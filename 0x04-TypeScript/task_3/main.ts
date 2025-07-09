// task_3/main.ts

// Interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// The printTeacher function implementation
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    // Get the first letter of the firstName and capitalize it
    const firstInitial = firstName.charAt(0).toUpperCase();
    // Return the formatted string
    return `${firstInitial}. ${lastName}`;
};

// Example usage as requested
const teacherName1 = printTeacher("John", "Doe");
console.log(`printTeacher("John", "Doe") -> ${teacherName1}`); // Expected: J. Doe

const teacherName2 = printTeacher("alice", "smith");
console.log(`printTeacher("alice", "smith") -> ${teacherName2}`); // Expected: A. smith

const teacherName3 = printTeacher("bob", "MARLEY");
console.log(`printTeacher("bob", "MARLEY") -> ${teacherName3}`); // Expected: B. MARLEY


// To ensure console.log output is easily viewable in the browser,
// you can add a simple HTML structure.
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h1>Print Teacher Function Output</h1>
        <p><code>printTeacher("John", "Doe")</code> -> <strong>${teacherName1}</strong></p>
        <p><code>printTeacher("alice", "smith")</code> -> <strong>${teacherName2}</strong></p>
        <p><code>printTeacher("bob", "MARLEY")</code> -> <strong>${teacherName3}</strong></p>
        <p>Check the browser console for more detailed output.</p>
    `;
    document.body.appendChild(outputDiv);
});