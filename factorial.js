//given a positive number find the factorial of that number
//factorial of a number is the product of all positive integers less than or equal to that number
//factorial of 0 is 1
//factorial of 1 is 1   
//factorial of 2 is 2*1 = 2
//factorial of 3 is 3*2*1 = 6
//factorial of 4 is 4*3*2*1 = 24
//factorial of 5 is 5*4*3*2*1 = 120

function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }
    for(let i = num - 1; i >= 1; i--){
        num = num * i;
    }
    return num;
}