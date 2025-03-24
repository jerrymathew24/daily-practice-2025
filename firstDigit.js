//Given a number n, find the first digit of the number.

function firstDigit(n){
    return Number(String(Math.abs(n))[0]);
}

console.log(firstDigit(1234)); // 1
console.log(firstDigit(5678)); // 5
console.log(firstDigit(-9876)); // 9