const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// -> Get published courses
const publishedCourses = courses.filter(course => course.published);

// -> Sort courses by price (high → low)
const sortedByPriceDesc = [...courses].sort(
  (a, b) => b.price - a.price
);

// -> Extract { title, price } only
const courseSummaries = courses.map(course => ({
  title: course.title,
  price: course.price
}));

// -> Calculate total value of published courses
const totalPublishedValue = publishedCourses.reduce(
  (total, course) => total + course.price,
  0
);

// -> Add a new course immutably
const newCourse = {
  id: 104,
  title: "Express",
  price: 1099,
  published: true
};

const updatedCourses = [...courses, newCourse];

// Logs
console.log("Published Courses:", publishedCourses);
console.log("Courses Sorted by Price (High → Low):", sortedByPriceDesc);
console.log("Course Summaries:", courseSummaries);
console.log("Total Value of Published Courses:", totalPublishedValue);
console.log("Updated Courses:", updatedCourses);
console.log("Original Courses (Unchanged):", courses);



