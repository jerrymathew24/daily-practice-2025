function FindZeros(arr)  {
 if(arr.length === 0){
    return 0
 }

 for(let i=0;i<arr.length;i++){
    let count = 0
    if(arr[i]===0){
        count++
    }
    return count
 }
}

console.log(FindZeros([0,1,2,3,4,5])) // 1
console.log(FindZeros([1,2,3,4,5])) // 0;
