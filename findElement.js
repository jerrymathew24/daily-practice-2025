function searchEl(arr,x){
    if(arr.length === 0){
        return false
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i]===x){
            return i
        }
    }
    return -1
    //here we are checking if the array is empty. If it is, we return false. Then we loop through the array and check if each element is equal to x. If we find a match, we return the index of that element. If we reach the end of the loop without finding a match, we return -1.
    // This is a simple and efficient way to search for an element in an array. The time complexity of this algorithm is O(n), where n is the length of the array. The space complexity is O(1), as we are not using any additional data structures that grow with the input size. Overall, this is a good solution for searching for an element in an array.
}

console.log(searchEl([1,2,3,4,5], 3)) // 2
console.log(searchEl([1,2,3,4,5], 6)) // -1;
