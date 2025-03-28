let string='hello world'

function reverseString(){
    let result =''
    for(let i=string.length-1;i>=0;i--){
        result += string[i]
    }
    return result
}

console.log(reverseString()) // dlrow olleh