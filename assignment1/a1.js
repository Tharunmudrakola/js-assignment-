const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products
const inStockProducts = cart.filter(product => product.inStock);
console.log("In-Stock Products:", inStockProducts);
//Use map() to create a new array with:  { name, totalPrice }
const productTotals = cart.map(product => {
  return {
    name: product.name,
    totalPrice: product.price * product.quantity
  };
} 
);
console.log("Product Totals:", productTotals);
//Use reduce() to calculate grand total cart value
const grandTotal = cart.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}       
, 0);
console.log("Grand Total Cart Value:", grandTotal);           

//Use find() to get details of "Mouse"
const mouseDetails = cart.find(product => product.name === "Mouse");        
console.log("Mouse Details:", mouseDetails);   
//Use findIndex() to find the position of "Keyboard"
const keyboardIndex = cart.findIndex(product => product.name === "Keyboard");
console.log("Index of Keyboard:", keyboardIndex);   