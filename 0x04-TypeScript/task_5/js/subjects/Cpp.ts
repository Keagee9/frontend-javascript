// task_4/js/subjects/Cpp.ts

/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: Add experienceTeachingC to the Teacher interface
  export interface Teacher {
    experienceTeachingC?: number; // Optional attribute
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC !== undefined && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}