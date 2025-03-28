//find the distinct elements in an array with reducer function
const arr = ['a', 'b', 'c', 'a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const result = arr.reduce((acc, cur) => 
    cur in acc 
        ? { ...acc, [cur]: acc[cur] + 1 } // If `cur` exists in `acc`, update it. here new key is made with the expression `[cur]`and the value is updated with `acc[cur] + 1`
        : { ...acc, [cur]: 1 } // If `cur` is not in `acc`, initialize it to 1
, {});

console.log(result); ``


