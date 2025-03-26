function printAlphabets(c1,c2) {
    //your code goes here
    let result=[]
    for(let i=c1.charCodeAt(0);i<=c2.charCodeAt(0);i++){
        result.push(String.fromCharCode(i))
    }
    return console.log(result.join(' '))
}

printAlphabets('a','e') // a b c d e
printAlphabets('a','z') // a b c d e f g h i j k l m n o p q r s t u v w x y z
//end-here