// task 3
const marks = [78, 92, 35, 88, 40, 67];
//    1. filter() marks ≥ 40 (pass marks)
let passMarks = marks.filter(mark => mark >= 40);
console.log("Pass Marks:", passMarks);  
   // 2. map() to add 5 grace marks to each student
let updatedMarks = marks.map(mark => mark + 5);
console.log("Updated Marks with Grace:", updatedMarks); 
    //3. reduce() to find highest mark
let highestMark = marks.reduce((max, mark) => (mark > max ? mark : max), marks[0]);
console.log("Highest Mark:", highestMark);
    //4. find() first mark below 40
let firstBelow40 = marks.find(mark => mark < 40);
console.log("First Mark Below 40:", firstBelow40);
    //5. findIndex() of mark 92
let indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of Mark 92:", indexOf92);    