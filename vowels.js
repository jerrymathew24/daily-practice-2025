let str = "The quick brown fox jumps over the lazy dog";
let vowels = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(str){
    let newStr = ''
    for(let char of str){
        if(!vowels.includes(char))
            newStr += char
    }
    return console.log(newStr);
}

removeVowels(str); // Th qck brwn fx jmps vr th lzy dg