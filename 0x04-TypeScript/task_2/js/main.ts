// Task 5: DirectorInterface, TeacherInterface, classes, & createEmployee function

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

class Director implements DirectorInterface {
    workFromHome() { return "Working from home"; }
    getCoffeeBreak() { return "Getting a coffee break"; }
    workDirectorTasks() { return "Getting to director tasks"; }
}

class Teacher implements TeacherInterface {
    workFromHome() { return "Cannot work from home"; }
    getCoffeeBreak() { return "Cannot have a break"; }
    workTeacherTasks() { return "Getting to work"; }
}

export function createEmployee(salary: number | string): Director | Teacher {
      if (salary < 500) return new Teacher();
    return new Director();
}

// Task 6: isDirector, executeWork
export function isDirector(employee: Director | Teacher): employee is Director {
    return (employee instanceof Director);
}

export function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
            return employee.workTeacherTasks();
    }
}

// Task 7: Subjects type, teachClass
export type Subjects = "Math" | "History";
export function teachClass(todayClass:Subjects): string {
    if (todayClass === "Math") return "Teaching Math";
    return "Teaching History";
}
