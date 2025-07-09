// task_8/js/crud.d.ts

// Triple slash directive to include types from interface.ts
/// <reference path="../interface.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from '../interface';

// Declare a module named 'crud' to define types for crud.js
// This allows TypeScript to understand the exports of crud.js
declare module './crud' { // Use './crud' to match the import path in main.ts
    /**
     * Inserts a new row into the database.
     * @param row The row element to insert.
     * @returns The ID of the newly inserted row.
     */
    export function insertRow(row: RowElement): RowID;

    /**
     * Deletes a row from the database.
     * @param rowId The ID of the row to delete.
     */
    export function deleteRow(rowId: RowID): void;

    /**
     * Updates an existing row in the database.
     * @param rowId The ID of the row to update.
     * @param row The updated row element.
     * @returns The ID of the updated row.
     */
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}