let age = 35;
let ticket = 800;

if(age > 10 && age < 15){
    console.log('you have free ticket');
}
else if(age >= 20 && age <= 30){
    let discount = ticket * 50 / 100;
    let payAmount = ticket - discount;
    console.log('Student get a 50% discouont', payAmount);
}
else if(age >= 60 && age <= 70){
    let discount = ticket * 15 / 100;
    let payAmount = ticket - discount;
    console.log('senior citizens gets a 15% discount', payAmount)
}
else{
    if(age <= 30 && age <= 50){
        console.log('Otherwise Regular ticket fare', ticket);
    }
}