//way1
let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = 0;
num.map((number)=>{
    number < 40 ? sum+=number : null;
})
console.log(sum); // 100


//way2
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let total = numbers.reduce((acc,cur)=>cur < 40 ? acc+cur :acc,0)
console.log(total); // 100