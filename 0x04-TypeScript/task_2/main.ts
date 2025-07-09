// task_6/main.ts

// Re-using interfaces from previous tasks
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Re-using classes from previous tasks
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Re-using createEmployee function from previous tasks
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// New function: isDirector (Type Predicate)
/**
 * Type predicate to check if an employee is a Director.
 * @param employee The employee instance (Director or Teacher).
 * @returns True if the employee is a Director, false otherwise.
 */
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// New function: executeWork
/**
 * Executes the specific work task based on the employee's role.
 * @param employee The employee instance (Director or Teacher).
 * @returns The result of the work task.
 */
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        // If employee is a Director, TypeScript knows it has workDirectorTasks
        return employee.workDirectorTasks();
    } else {
        // Otherwise, it must be a Teacher, and TypeScript knows it has workTeacherTasks
        return employee.workTeacherTasks();
    }
}

// Expected results:
console.log("--- executeWork examples ---");
const employeeA = createEmployee(200);
const workA = executeWork(employeeA);
console.log(`createEmployee(200) -> ${employeeA.constructor.name}: ${workA}`); // Expected: Getting to work

const employeeB = createEmployee(1000);
const workB = executeWork(employeeB);
console.log(`createEmployee(1000) -> ${employeeB.constructor.name}: ${workB}`); // Expected: Getting to director tasks

const employeeC = createEmployee('$300'); // This will return a Director
const workC = executeWork(employeeC);
console.log(`createEmployee('$300') -> ${employeeC.constructor.name}: ${workC}`); // Expected: Getting to director tasks


// To ensure console.log output is easily viewable in the browser,
// you can add a simple HTML structure to display the results.
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h1>Employee Work Execution</h1>
        <p><strong>createEmployee(200)</strong> (a Teacher) work: <code>${workA}</code></p>
        <p><strong>createEmployee(1000)</strong> (a Director) work: <code>${workB}</code></p>
        <p><strong>createEmployee('$300')</strong> (a Director) work: <code>${workC}</code></p>
        <p>Check the browser console for more detailed output.</p>
    `;
    document.body.appendChild(outputDiv);
});