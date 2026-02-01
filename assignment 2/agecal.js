let dob = "2000-05-15";

// Convert DOB string to Date object
const birthDate = new Date(dob);
const today = new Date();

// Calculate age
let age = today.getFullYear() - birthDate.getFullYear();

// Check if birthday has occurred this year
const hasHadBirthday =
  today.getMonth() > birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() &&
   today.getDate() >= birthDate.getDate());

if (!hasHadBirthday) {
  age--;
}

// Output
console.log("Exact Age in Years:", age);
