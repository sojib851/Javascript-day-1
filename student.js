let marks = 30;
let grade;
if(marks >= 90 && marks <= 100){
    grade = 'A+';
}
else if(marks >= 70 && marks <= 80){
    grade = 'B';
}
else if(marks >= 60 && marks <= 70){
    grade = 'C';
}
else if(marks >= 50 && marks <= 60){
    grade = 'D';
}
else{
    console.log('you are fail');
}
console.log('Your grade is :', grade);