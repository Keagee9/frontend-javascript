// task_2/main.ts

// Re-defining the Teacher interface from the previous task for completeness
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows additional properties like 'contract'
}

// Define the Directors interface, extending Teacher
interface Directors extends Teacher {
    numberOfReports: number; // New required attribute for Directors
}

// Example usage as requested
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// You can also create another director with optional properties from Teacher
const director2: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    location: 'New York',
    fullTimeEmployee: false,
    yearsOfExperience: 5, // Optional from Teacher
    numberOfReports: 10,
    department: 'HR' // Additional property via index signature from Teacher
};

console.log(director2);

// To ensure console.log output is easily viewable in the browser,
// you can add a simple HTML structure.
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h2>Director 1:</h2>
        <pre>${JSON.stringify(director1, null, 2)}</pre>
        <h2>Director 2:</h2>
        <pre>${JSON.stringify(director2, null, 2)}</pre>
    `;
    document.body.appendChild(outputDiv);
});