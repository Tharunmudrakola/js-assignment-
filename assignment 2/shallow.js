// Original object
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// 1. Shallow copy of user
const userCopy = { ...user };

// 2. Changes in copied object
userCopy.name = "Amit";
userCopy.preferences.theme = "light";

// 3. Log both objects
console.log("Original User:", user);
console.log("Copied User:", userCopy);
