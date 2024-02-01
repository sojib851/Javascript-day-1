// let price = 1500;

// if(price >= 1000){
//     let discount = price * 5 / 100;
//     let payAmount = price - discount;
//     console.log(payAmount);
// }
// else if (price >= 2000){
//     let discount = price * 5 / 100;
//     let payAmount = price - discount;
//     console.log(payAmount);
// }

// else{
//     console.log(price)
// }


let age = 34;
let price = 500;

if (age <= 12){
    console.log('yu can get for free');
}
else if (age <= 35){
    let discount = price * 10 / 100;
    let payAmount = price - discount;
    console.log('hello kaka apnar jonno discount matro ', payAmount, 'taka');
}
else if (age >= 60){
    let discount = price * 10 / 100;
    let payAmount = price - discount;
    console.log("Hello dadu apnar jonno discount matro:", payAmount, "taka")
}
else {
    console.log("you can't get this product")
}