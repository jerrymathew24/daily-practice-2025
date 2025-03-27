//add even and odd numbers with reducer function

const numbers = [1,2,3,4,5,6,7,8,9]

const {oddSum, evenSum} = numbers.reduce((acc, num) => {
  if(num % 2 === 0) {
    acc.evenSum += num
  } else {
    acc.oddSum += num
  }
  return acc
}, {oddSum: 0, evenSum: 0})
console.log(oddSum) // 25
console.log(evenSum) // 20;

//--------------------------------WAY 2--------------------------------------------------------


const nums = [1,2,3,4,5,6,7,8,9]

function reducerFunction(acc,num){
    if(num%2===0){
        acc.evenSum+=num
    }else{
        acc.oddsum+=num
    }
    return acc
}

const {oddSumm,evenSumm} = nums.reduce(reducerFunction, {oddSumm:0, evenSumm:0})
console.log(oddSum) // 25
console.log(evenSum) // 20;

