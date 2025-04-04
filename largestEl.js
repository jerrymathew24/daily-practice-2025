

function findLargest(arr){

    if(!Array.isArray(arr)){
        throw new Error("Input must be an array")
    }

    if(arr.length === 0){
        throw new Error('Array cannot be empty')
    }

    let numericValues = arr.filter(num => typeof num === 'number' && !isNaN(num))

    if(numericValues.length === 0){
        throw new Error('Array must contain at least one numeric value')
    }

    return Math.max(...numericValues)
}

//test cases
try {
    console.log(findLargest([10, 25, 89, 56, 102, 7])); // ✅ 102
    console.log(findLargest([-10, -25, -89, -56, -102, -7])); // ✅ -7
    console.log(findLargest([10.5, 25.1, 89.9, 56.7, 102.3, 7.6])); // ✅ 102.3
    console.log(findLargest([10, "text", null, NaN, 50, undefined])); // ✅ 50
    console.log(findLargest(["a", "b", "c"])); // ❌ Error: Array must contain at least one valid number
    console.log(findLargest([])); // ❌ Error: Array cannot be empty
    console.log(findLargest("not an array")); // ❌ Error: Input must be an array
} catch (error) {
    console.error(error.message);
}

//here we are checking if the input is an array. If it is not, we throw an error. Then we check if the array is empty and throw an error if it is. Next, we filter the array to get only numeric values and check if there are any valid numbers. If not, we throw an error. Finally, we return the maximum value using Math.max() and the spread operator. This solution is efficient and handles edge cases well.
// The time complexity of this algorithm is O(n), where n is the length of the array. The space complexity is O(n) due to the filtering step, but it can be considered O(1) if we ignore the space used for the output. Overall, this is a good solution for finding the largest number in an array.
