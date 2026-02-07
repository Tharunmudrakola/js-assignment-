const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
const passedStudents = students.filter(student => student.marks >= 40);
console.log("Passed Students:", passedStudents);

//map() to add a grade field
        //≥90 → A
        //≥75 → B
        //≥60 → C
        //else → D
const gradedStudents = students.map(student => {
  let grade;            
    if (student.marks >= 90) {
        grade = 'A';

    } else if (student.marks >= 75) {
        grade = 'B';
    }       
    else if (student.marks >= 60) {
        grade = 'C';
    }   
    else {
        grade = 'D';
    }   
    return { ...student, grade: grade };
});
console.log("Graded Students:", gradedStudents);
//reduce() to calculate average marks
const totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);        
//find() the student who scored 92
const studentWith92 = students.find(student => student.marks === 92);           
console.log("Student with 92 Marks:", studentWith92);

///findIndex() of student "Kiran"
const kiranIndex = students.findIndex(student => student.name === "Kiran"); 
console.log("Index of Kiran:", kiranIndex);