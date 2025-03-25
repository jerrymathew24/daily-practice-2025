//anagram
//Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, "act" and "tac" are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

function anagram(s1, s2){   
     s1.length === s2.length ? console.log(s1.split('').sort().join('') === s2.split('').sort().join('')) : console.log(false)
}

anagram('listen', 'silent') // true
anagram('hello', 'world') // false