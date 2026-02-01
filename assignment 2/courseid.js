// Courses data
const courses = [
  { courseId: 101, title: "Java", price: 3000, paid: true },
  { courseId: 102, title: "Python", price: 2500, paid: true },
  { courseId: 103, title: "HTML", price: 0, paid: false }
];

// Cart data
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// 1. Merge cart with courses (full course info)
const mergedCart = cart.map(item => {
  const course = courses.find(c => c.courseId === item.courseId);
  return {
    ...course,
    qty: item.qty
  };
});

// 2. Calculate total cart amount
const totalAmount = mergedCart.reduce(
  (total, item) => total + item.price * item.qty,
  0
);

// 3. Increase quantity of a course (immutably)
const updatedCart = cart.map(item =>
  item.courseId === 101
    ? { ...item, qty: item.qty + 1 }
    : item
);

// 4. Remove a course from cart
const cartAfterRemoval = cart.filter(
  item => item.courseId !== 103
);

// 5. Check if all cart items are paid courses
const allPaidCourses = mergedCart.every(item => item.paid);

// Output
console.log("Merged Cart:", mergedCart);
console.log("Total Cart Amount:", totalAmount);
console.log("Updated Cart (Qty Increased):", updatedCart);
console.log("Cart After Removal:", cartAfterRemoval);
console.log("All Courses Paid?", allPaidCourses);
