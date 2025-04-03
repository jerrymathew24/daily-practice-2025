function PositiveAvg(arr){
let sum =0
let count = 0
let avg;
    if(arr.length ===0 || arr === null){
        return 0
    }
    for (let i=0;i<arr.length;i++){
if(arr[i]>=0){
    count++
    sum += arr[i]
    avg= sum/count
}
    }
    return count === 0 ? 0 : avg
}
console.log(PositiveAvg([1,2,3,4,5])) // 3
console.log(PositiveAvg([-1,-2,-3,-4,-5])) // 0;
//here we are checking if the array is empty or null. If it is, we return 0. Then we loop through the array and check if each element is greater than or equal to 0. If it is, we increment the count and add the element to the sum. Finally, we calculate the average by dividing the sum by the count. If the count is 0, we return 0, otherwise we return the average.
// This is a simple and efficient way to calculate the average of positive numbers in an array. The time complexity of this algorithm is O(n), where n is the length of the array. The space complexity is O(1), as we are not using any additional data structures that grow with the input size. Overall, this is a good solution for calculating the average of positive numbers in an array.
