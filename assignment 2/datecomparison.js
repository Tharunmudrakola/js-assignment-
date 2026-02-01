// Enrollment deadline
let enrollmentDeadline = new Date("2026-01-20");

// 1. Check enrollment status
const today = new Date();

if (today < enrollmentDeadline) {
  console.log("Enrollment Open");
} else {
  console.log("Enrollment Closed");
}

// 2. Validate user input date
const inputDateStr = "2026-02-30";
const inputDate = new Date(inputDateStr);

// Function to validate date strictly
function isValidDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(dateStr);

  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
}

if (isValidDate(inputDateStr)) {
  console.log("Valid Date");
} else {
  console.log("Invalid Date");
}
