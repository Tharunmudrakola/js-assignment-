// 1. Create Date object for current date & time
const now = new Date();

// 2. Extract components
const year = now.getFullYear();

// Month (human readable)
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = months[now.getMonth()];

const date = now.getDate();

// Day of week
const days = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
];
const day = days[now.getDay()];

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Display extracted values
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Time:", hours, ":", minutes, ":", seconds);

// 3. Display formatted date: DD-MM-YYYY HH:mm:ss
const pad = num => String(num).padStart(2, "0");

const formattedDate =
  `${pad(date)}-${pad(now.getMonth() + 1)}-${year} ` +
  `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

console.log("Formatted Date:", formattedDate);