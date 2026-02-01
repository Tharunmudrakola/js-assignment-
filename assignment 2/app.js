// Import task functions
import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. Add some tasks
console.log(addTask("Learn JavaScript", "high", "2026-02-10"));
console.log(addTask("Practice HTML", "medium", "2026-02-05"));
console.log(addTask("Go", "low", "2026-01-01")); // Invalid (past date / short title)

// 2. Display all tasks
console.log("All Tasks:", getAllTasks());

// 3. Complete a task
console.log(completeTask(1));

// 4. Display all tasks again
console.log("Updated Tasks:", getAllTasks());
