import {
  getAllProducts,
  searchProducts,
  getProductsByCategory
} from './product.js';

import {
  addToCart,
  getCartItems,
  getCartTotal,
  updateQuantity,
  removeFromCart
} from './cart.js';

import { processPayment } from './payment.js';

console.log('=== E-Commerce Store ===\n');

// Browse products
console.log('All Products:');
console.log(getAllProducts());

// Search
console.log('\nSearch "phone":');
console.log(searchProducts('phone'));

// Add to cart
console.log('\nAdding to Cart');
console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));

// View cart
console.log('\nCart Items:');
console.log(getCartItems());
console.log('Total:', getCartTotal());

// Update quantity
console.log(updateQuantity(1, 2));

// Remove item
console.log(removeFromCart(3));

// Checkout
console.log('\nCheckout');
const order = processPayment('upi', 'WELCOME10');
console.log(order);
