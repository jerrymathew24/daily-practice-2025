function findSubstring(txt, pat) {
    return txt.indexOf(pat);
}

// Example Usage
console.log(findSubstring("GeeksForGeeks", "Fr")); // Output: -1
console.log(findSubstring("GeeksForGeeks", "For")); // Output: 5

function findSubString(text,pattern){
    return text.indexOf(pattern)
}
console.log(findSubString("GeeksForGeeks", "G")); // Output: 0
console.log(findSubString("GeeksForGeeks", "e")); // Output: 1