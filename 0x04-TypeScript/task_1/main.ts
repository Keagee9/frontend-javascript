// task_1/main.ts

// Define the Teacher interface
interface Teacher {
    readonly firstName: string; // Modifiable only on initialization
    readonly lastName: string;  // Modifiable only on initialization
    fullTimeEmployee: boolean;   // Always defined
    yearsOfExperience?: number;  // Optional attribute
    location: string;            // Always defined
    [key: string]: any;          // Allows adding any additional attribute with a string key and any value
}

// Example usage as requested
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // This is an additional attribute
};

console.log(teacher3);

// You can also create another teacher with yearsOfExperience
const teacher4: Teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'Paris',
    subject: 'Math', // Another additional attribute
};

console.log(teacher4);

// Attempting to reassign readonly properties will result in a TypeScript error:
// teacher3.firstName = 'Jonathan'; // Error: Cannot assign to 'firstName' because it is a read-only property.

// To make sure the console.log output is visible in the browser's console
// when running with webpack-dev-server, you don't need additional HTML for this task,
// but if you were to, it would look like this:
/*
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h2>Teacher 3:</h2>
        <pre>${JSON.stringify(teacher3, null, 2)}</pre>
        <h2>Teacher 4:</h2>
        <pre>${JSON.stringify(teacher4, null, 2)}</pre>
    `;
    document.body.appendChild(outputDiv);
});
*/