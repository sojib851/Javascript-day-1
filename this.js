let BMI = 25;

if(BMI >= 18.5){
    console.log('You are underweight');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('you are normal');
}
else if (BMI >= 25 && BMI <= 29.9){
    console.log('you are overweight');
}
else{
    console.log("otherwise, your are obeses.");
}