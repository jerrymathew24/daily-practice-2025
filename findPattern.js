//Given a string s, and a pattern p. You need to find if p exists in s or not and return //the starting index of p in s. If p does not exist in s then -1 will be returned.
//Here p and s both are case-sensitive.

function findPattern(s, p) {
    return s.indexOf(p) 
    }

console.log(findPattern("hello", "lo")); // 3
console.log(findPattern("hello", "he")); // 0