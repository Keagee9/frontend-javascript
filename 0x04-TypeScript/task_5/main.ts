// task_5/main.ts

// Interface for MajorCredits with a brand property
export interface MajorCredits {
    credits: number;
    // Brand property for nominal typing
    _brand: "MajorCredits";
}

// Interface for MinorCredits with a brand property
export interface MinorCredits {
    credits: number;
    // Brand property for nominal typing
    _brand: "MinorCredits";
}

/**
 * Sums the credits of two MajorCredits subjects.
 * @param subject1 The first MajorCredits subject.
 * @param subject2 The second MajorCredits subject.
 * @returns A new MajorCredits object with the summed credits.
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: "MajorCredits" // Ensure the brand is maintained
    };
}

/**
 * Sums the credits of two MinorCredits subjects.
 * @param subject1 The first MinorCredits subject.
 * @param subject2 The second MinorCredits subject.
 * @returns A new MinorCredits object with the summed credits.
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: "MinorCredits" // Ensure the brand is maintained
    };
}

// --- Example Usage ---

// Create example MajorCredits subjects
const majorSubjectA: MajorCredits = { credits: 3, _brand: "MajorCredits" };
const majorSubjectB: MajorCredits = { credits: 4, _brand: "MajorCredits" };

// Sum MajorCredits
const totalMajorCredits = sumMajorCredits(majorSubjectA, majorSubjectB);
console.log("Total Major Credits:", totalMajorCredits); // Expected: { credits: 7, _brand: "MajorCredits" }

// Create example MinorCredits subjects
const minorSubjectX: MinorCredits = { credits: 1, _brand: "MinorCredits" };
const minorSubjectY: MinorCredits = { credits: 2, _brand: "MinorCredits" };

// Sum MinorCredits
const totalMinorCredits = sumMinorCredits(minorSubjectX, minorSubjectY);
console.log("Total Minor Credits:", totalMinorCredits); // Expected: { credits: 3, _brand: "MinorCredits" }

// --- Demonstrating nominal typing (will cause a TypeScript error if uncommented) ---
// const invalidSum: MajorCredits = sumMinorCredits(minorSubjectX, minorSubjectY);
// Error: Type 'MinorCredits' is not assignable to type 'MajorCredits'.
// Types of property '_brand' are incompatible.
// Type '"MinorCredits"' is not assignable to type '"MajorCredits"'.


// To ensure console.log output is easily viewable in the browser,
// you can load this main.ts in an HTML file
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
        <h1>Credit Summation</h1>
        <p><strong>Total Major Credits:</strong> <code>${JSON.stringify(totalMajorCredits)}</code></p>
        <p><strong>Total Minor Credits:</strong> <code>${JSON.stringify(totalMinorCredits)}</code></p>
        <p>Check the browser console for more detailed output.</p>
        <p>This demonstrates "nominal typing" using brand properties, preventing accidental assignment between MajorCredits and MinorCredits even though their underlying structure (a 'credits' number) is similar.</p>
    `;
    document.body.appendChild(outputDiv);
});