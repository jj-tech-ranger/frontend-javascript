# 0x04. TypeScript

This project introduces TypeScript fundamentals through hands-on tasks that build from basic types to advanced features like interfaces, classes, generics, namespaces, and nominal typing. It reinforces how TypeScript improves code reliability, structure, and maintainability in frontend JavaScript development.

---

## Project Structure

Each task focuses on a specific TypeScript concept:

### Task 0: Creating an Interface for a Student
- Defined a `Student` interface with four properties.
- Created two student objects and rendered a table dynamically using Vanilla JS.

### Task 1: Teacher Interface and Extension
- Defined a `Teacher` interface with optional and readonly fields.
- Extended it with a `Directors` interface including `numberOfReports`.
- Implemented a `printTeacher` function and `StudentClass` using TypeScript interfaces.

### Task 2: Advanced Types
- Created `DirectorInterface` and `TeacherInterface` with role-specific methods.
- Built `Director` and `Teacher` classes implementing these interfaces.
- Wrote `createEmployee`, `isDirector`, and `executeWork` functions.
- Used string literal types with `teachClass` to restrict input to `"Math"` or `"History"`.

### Task 3: Ambient Namespaces
- Defined types `RowID` and `RowElement`.
- Declared type definitions for an external `crud.js` library in `crud.d.ts`.
- Imported and used these in `main.ts` for inserting, updating, and deleting rows.

### Task 4: Namespaces & Declaration Merging
- Created a `Subjects` namespace containing:
    - `Teacher` interface and `Subject` base class.
    - `Cpp`, `Java`, and `React` subclasses using declaration merging.
- Implemented `getRequirements` and `getAvailableTeacher` methods.
- Configured a `main.ts` file to log subjects and available teachers.

### Task 5: Nominal Typing
- Implemented `MajorCredits` and `MinorCredits` interfaces with brand properties.
- Created `sumMajorCredits` and `sumMinorCredits` functions returning strongly-typed results.

---
## Technologies Used
- TypeScript
- Webpack
- ESLint
- Node.js and npm
- Jest for testing