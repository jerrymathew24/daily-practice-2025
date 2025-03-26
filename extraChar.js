function extraChar(s1, s2) {
    s2 = s2.split('').sort().join('');
    s1 = s1.split('').sort().join('');
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            return s2[i]; // Found the extra character
        }
    }
    
    return s2[s2.length - 1]; // Extra character is the last one
}

console.log(extraChar('listen', 'silentt')); // 't'
console.log(extraChar('abcd', 'abcde')); // 'e'
console.log(extraChar('xyz', 'yxzf')); // 'z'
console.log(extraChar('a', 'fa')); // 'a'