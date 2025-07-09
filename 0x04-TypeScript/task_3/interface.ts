// task_8/interface.ts

// Type for RowID
export type RowID = number;

// Interface for RowElement
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number; // Optional age field
}