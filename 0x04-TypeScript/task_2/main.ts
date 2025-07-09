// task_5/main.ts

// DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director Class
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

// Teacher Class
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

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    // If salary is a number and less than 500, return a new Teacher
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    // Otherwise, return a Director
    return new Director();
}

// Expected result examples:
console.log("--- createEmployee examples ---");
const employee1 = createEmployee(200);
console.log(`createEmployee(200) returns: ${employee1.constructor.name}`); // Expected: Teacher
console.log(`  workFromHome: ${employee1.workFromHome()}`);
console.log(`  getCoffeeBreak: ${employee1.getCoffeeBreak()}`);
// Note: TypeScript will allow calling methods specific to Teacher or Director
// if you use type guards, but for generic logging, we'll just show common ones.
if (employee1 instanceof Teacher) {
    console.log(`  workTeacherTasks: ${employee1.workTeacherTasks()}`);
} else if (employee1 instanceof Director) {
    console.log(`  workDirectorTasks: ${employee1.workDirectorTasks()}`);
}


const employee2 = createEmployee(1000);
console.log(`\ncreateEmployee(1000) returns: ${employee2.constructor.name}`); // Expected: Director
console.log(`  workFromHome: ${employee2.workFromHome()}`);
console.log(`  getCoffeeBreak: ${employee2.getCoffeeBreak()}`);
if (employee2 instanceof Teacher) {
    console.log(`  workTeacherTasks: ${employee2.workTeacherTasks()}`);
} else if (employee2 instanceof Director) {
    console.log(`  workDirectorTasks: ${employee2.workDirectorTasks()}`);
}


const employee3 = createEmployee('$500');
console.log(`\ncreateEmployee('$500') returns: ${employee3.constructor.name}`); // Expected: Director
console.log(`  workFromHome: ${employee3.workFromHome()}`);
console.log(`  getCoffeeBreak: ${employee3.getCoffeeBreak()}`);
if (employee3 instanceof Teacher) {
    console.log(`  workTeacherTasks: ${employee3.workTeacherTasks()}`);
} else if (employee3 instanceof Director) {
    console.log(`  workDirectorTasks: ${employee3.workDirectorTasks()}`);
}


// To ensure console.log output is easily viewable in the browser,
// you can add a simple HTML structure to display the results.
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h1>Employee Creation Examples</h1>
        <p><strong>createEmployee(200)</strong> returns a <code>${employee1.constructor.name}</code>:</p>
        <ul>
            <li>Work from Home: ${employee1.workFromHome()}</li>
            <li>Coffee Break: ${employee1.getCoffeeBreak()}</li>
            ${employee1 instanceof Teacher ? `<li>Teacher Tasks: ${employee1.workTeacherTasks()}</li>` : ''}
            ${employee1 instanceof Director ? `<li>Director Tasks: ${employee1.workDirectorTasks()}</li>` : ''}
        </ul>

        <p><strong>createEmployee(1000)</strong> returns a <code>${employee2.constructor.name}</code>:</p>
        <ul>
            <li>Work from Home: ${employee2.workFromHome()}</li>
            <li>Coffee Break: ${employee2.getCoffeeBreak()}</li>
            ${employee2 instanceof Teacher ? `<li>Teacher Tasks: ${employee2.workTeacherTasks()}</li>` : ''}
            ${employee2 instanceof Director ? `<li>Director Tasks: ${employee2.workDirectorTasks()}</li>` : ''}
        </ul>

        <p><strong>createEmployee('$500')</strong> returns a <code>${employee3.constructor.name}</code>:</p>
        <ul>
            <li>Work from Home: ${employee3.workFromHome()}</li>
            <li>Coffee Break: ${employee3.getCoffeeBreak()}</li>
            ${employee3 instanceof Teacher ? `<li>Teacher Tasks: ${employee3.workTeacherTasks()}</li>` : ''}
            ${employee3 instanceof Director ? `<li>Director Tasks: ${employee3.workDirectorTasks()}</li>` : ''}
        </ul>
        <p>Check the browser console for more detailed output.</p>
    `;
    document.body.appendChild(outputDiv);
});