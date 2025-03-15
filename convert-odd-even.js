let num = [1,2,3,4,5,6,7,8,9,10]

for (let i=0;i<num.length;i++){
    if(num[i] % 2 === 0){
        num[i]--
    }else{
        num[i]++
    }
}

console.log(num) // [2,1,4,3,6,5,8,7,10,9]