const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// -> Get all role names
const roleNames = Object.keys(roles);

// -> Check if student can delete
const canStudentDelete = roles.student.includes("delete");

// -> Create a flat list of all unique permissions
const allUniquePermissions = [
  ...new Set(Object.values(roles).flat())
];

// -> Add new role moderator immutably
const updatedRoles = {
  ...roles,
  moderator: ["update", "view"]
};

// Logs
console.log("Role Names:", roleNames);
console.log("Can Student Delete:", canStudentDelete);
console.log("All Unique Permissions:", allUniquePermissions);
console.log("Updated Roles:", updatedRoles);
console.log("Original Roles (Unchanged):", roles);


