// task_7/main.ts

// Define the String literal type Subjects
type Subjects = 'Math' | 'History';

/**
 * Teaches a class based on the provided subject.
 * @param todayClass The subject to be taught, either 'Math' or 'History'.
 * @returns A string indicating which subject is being taught.
 */
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
    // This part is technically unreachable due to the Subjects type,
    // but good practice might include a fallback or error for robustness
    // if the type system were ever bypassed (e.g., in plain JS).
    // For strict TypeScript, this else is not needed as all cases are covered.
    // However, if you wanted to be super explicit or handle future extensions:
    // throw new Error(`Unknown subject: ${todayClass}`);
}

// Expected results:
console.log("--- teachClass examples ---");
const mathClass = teachClass('Math');
console.log(`teachClass('Math') -> ${mathClass}`); // Expected: Teaching Math

const historyClass = teachClass('History');
console.log(`teachClass('History') -> ${historyClass}`); // Expected: Teaching History

// Example of what would happen if you tried to pass an invalid subject (TypeScript error):
// teachClass('Physics'); // Error: Argument of type '"Physics"' is not assignable to parameter of type '"Math" | "History"'.


// To ensure console.log output is easily viewable in the browser,
// you can add a simple HTML structure to display the results.
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h1>Class Teaching Examples</h1>
        <p><code>teachClass('Math')</code>: <strong>${mathClass}</strong></p>
        <p><code>teachClass('History')</code>: <strong>${historyClass}</strong></p>
        <p>Check the browser console for more detailed output.</p>
    `;
    document.body.appendChild(outputDiv);
});