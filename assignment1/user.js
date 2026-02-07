const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
// Read and print the user’s name and email
console.log("Name:", user.name);
console.log("Email:", user.email);

// 2. Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";

// 3. Update role from "student" to "admin"
user.role = "admin";

// 4. Delete the isActive property
delete user.isActive;

// 5. Use Object.keys() to list all remaining fields
console.log("Remaining fields:", Object.keys(user));    