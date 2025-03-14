let str = 'malayalam'
function reversedStr(){
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}


if(str === reversedStr()){
        return console.log(true);
}else{
        return console.log(false);
}