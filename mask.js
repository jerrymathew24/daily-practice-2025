let str = '123456789987654321'
let mask = '#'.repeat(4)
let maskedStr = str.slice(0,str.length -4) + mask
console.log(maskedStr) //12345678998765####