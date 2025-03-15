let str = 'mohan'
let shiftByPos = 2

const encodedStr = (str,shiftByPos) =>{
    let encodedStr = ''
    let currentPos = 0
    for (let i = 0; i<str.length; i++){
        currentPos = str.charCodeAt(i)
        currentPos += shiftByPos
        encodedStr += String.fromCharCode(currentPos)
    }
    return encodedStr
}
console.log(encodedStr(str,shiftByPos)) // 'oqjcp'