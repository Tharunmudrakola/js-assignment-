// Given data
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// 1. Create a deep copy
const orderCopy = JSON.parse(JSON.stringify(order));

// 2. Modify the copied object
orderCopy.customer.address.city = "Bangalore";
orderCopy.items[0].price = 65000;

// 3. Verify original object remains unchanged
console.log("Original Order:", order);
console.log("Copied Order:", orderCopy);
