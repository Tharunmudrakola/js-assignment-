const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};


    //Calculate total marks
const totalMarks = Object.values(marks).reduce((acc, mark) => acc + mark, 0);   
console.log("Total Marks:", totalMarks);
// Calculate average marks
const averageMarks = totalMarks / Object.keys(marks).length;  
console.log("Average Marks:", averageMarks);      
    //  Find the highest scoring subject
const highestSubject = Object.keys(marks).reduce((maxSubj, subj) =>
    marks[subj] > marks[maxSubj] ? subj : maxSubj, Object.keys(marks)[0]);
console.log("Highest Scoring Subject:", highestSubject);
// Add a new subject computer: 90
marks.computer = 90;    
console.log("Updated Marks:", marks);
