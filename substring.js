const str = 'isdiasdia'

function substring(str,l,r){
    let result = ''
    for(let i =l;i<r+1;i++){
        result += str[i]
    }
    return result
}

console.log(substring(str,0,3)) // isdi
console.log(substring(str,0,4)) // isdia