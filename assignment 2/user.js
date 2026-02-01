const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// -> Get only active users
const activeUsers = users.filter(user => user.active);

// -> Extract names of active users
const activeUserNames = activeUsers.map(user => user.name);

// -> Check if any admin exists
const adminExists = users.some(user => user.role === "admin");

// -> Find user by id (example: id = 2)
const userById = users.find(user => user.id === 2);

// -> Deactivate a user immutably (example: id = 1)
const updatedUsers = users.map(user =>
  user.id === 1 ? { ...user, active: false } : user
);

// Logs
console.log("Active Users:", activeUsers);
console.log("Names of Active Users:", activeUserNames);
console.log("Admin Exists:", adminExists);
console.log("User with ID 2:", userById);
console.log("Users After Deactivation:", updatedUsers);
console.log("Original Users (Unchanged):", users);
