// You are given a number  and you have to print your answer according to the following:
// If the number is divisible by 3, you print "Fizz" (without quotes)
// If the number is divisible by 5, you print "Buzz" (without quotes)
// If the number is divisible by both 3 and 5, you print "FizzBuzz" (without quotes)
// In any other case, you print the number itself

// Note: You should add a newline character after print() statement.

function fizzBuzz(number) {
       if(number % 5 == 0 && number % 3 ===0){
           console.log('FizzBuzz')
       }else if(number%5 == 0 ){
           console.log('Buzz')
       }else if (number % 3 == 0){
           console.log('Fizz')
       }else {
           console.log(number)
       } // Write your code here
    }

    fizzBuzz(15); // FizzBuzz
    fizzBuzz(10); // Buzz
    fizzBuzz(9); // Fizz
    fizzBuzz(7); // 7
    fizzBuzz(6); // Fizz
    