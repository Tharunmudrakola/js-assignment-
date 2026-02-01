//task1
const temperatures = [32, 35, 28, 40, 38, 30, 42];
//filter() temperatures above 35
let hotTemperatures = temperatures.filter(temp => temp > 35);
console.log("Hot Temperatures:", hotTemperatures);
//map() to convert all temperatures from Celsius → Fahrenheit
let fahrenheitTemperatures = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);    
//reduce() to calculate average temperature
let totalTemperature = temperatures.reduce((acc, temp) => acc + temp, 0);
let averageTemperature = totalTemperature / temperatures.length;
console.log("Average Temperature:", averageTemperature);    
//find first temperature above 40
let firstAboveForty = temperatures.find(temp => temp > 40);
console.log("First Temperature above 40:", firstAboveForty);    
//findIndex() of temperature 28
let indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of Temperature 28:", indexOf28);

