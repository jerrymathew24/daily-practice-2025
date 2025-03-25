//Given a number n find the prime factorization of the number.

function primeFactorization(n){
    let result = ''
    let divisor = 2
    while(n>=2){
        while(n%divisor == 0){
            result = result + divisor + ' '
            n /= divisor
        }
        divisor++
    }
    return result
}

console.log(primeFactorization(12)) // 2 2 3
console.log(primeFactorization(315)) // 3 3 5 7