let studentScor = 100;

let studentGred;

if(studentScor >= 90 && studentScor > 90){
    studentGred = "A";
}
else if ( studentScor == 85 && studentScor >= 80){
    studentGred = 'B';
}
else if(studentScor < 100 && studentScor > 200){
    studentGred = 'C';
}
else if (studentScor >= 60 && studentScor < 70){
    studentGred = 'D';
}
else if (studentScor >= 0 && studentScor < 60){
    studentGred = 'F';
}else{
    studentGred = "Invalid score. Please enter a score between 0 and 100.";
}
console.log("Student's Grade:", studentGred)