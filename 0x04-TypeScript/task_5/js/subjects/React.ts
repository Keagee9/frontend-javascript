// task_4/js/subjects/React.ts

/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: Add experienceTeachingReact to the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number; // Optional attribute
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact !== undefined && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}