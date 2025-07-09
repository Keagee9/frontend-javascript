// task_8/main.ts

// Triple slash directive to include the ambient declarations from crud.d.ts
/// <reference path="./js/crud.d.ts" />

// Import the RowID type and RowElement interface from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
// TypeScript will use the crud.d.ts declarations for this import
import * as CRUD from './js/crud';

// Create an object called row with the type RowElement
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Create a const variable named newRowID with the type RowID
// and assign the value the insertRow command.
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow with the type RowElement
// and update row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 }; // Using spread syntax to add/override properties

// Call the updateRow and deleteRow commands.
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID); // Use newRowID for deletion as well

// To ensure console.log output is easily viewable in the browser,
// you can add a simple HTML structure to display the results.
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h1>CRUD Operations Output</h1>
        <p>Check the browser console for the output of insertRow, updateRow, and deleteRow operations.</p>
        <p>Initial Row: <code>${JSON.stringify(row)}</code></p>
        <p>New Row ID (from insertRow): <code>${newRowID}</code></p>
        <p>Updated Row: <code>${JSON.stringify(updatedRow)}</code></p>
    `;
    document.body.appendChild(outputDiv);
});