function arraySortedOrNot(arr){
if(arr.length === 0 || arr.length === 1){
    return true;
}

for(let i=0;i<arr.length-1;i++){
    if(arr[i] > arr[i+1]){
        return false;
    }
}
return true;
//here we are checking if the array is sorted or not by comparing each element with the next one. If any element is greater than the next one, we return false. If we reach the end of the loop without finding any such case, we return true.
// This is a simple and efficient way to check if an array is sorted in ascending order. The time complexity of this algorithm is O(n), where n is the length of the array.
// The space complexity is O(1), as we are not using any additional data structures that grow with the input size.
// Overall, this is a good solution for checking if an array is sorted in ascending order.
// The time complexity of this algorithm is O(n), where n is the length of the array.
}

console.log(arraySortedOrNot([1,2,3,4,5])) // true
console.log(arraySortedOrNot([1,2,3,5,4])) // false;
