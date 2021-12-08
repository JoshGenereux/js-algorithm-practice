
let string = "test"
let string2 = "testing";



const middleChar = (string) =>{
    let middle = ''
    if(string.length % 2 !== 0){
        return string[Math.floor(string.length / 2)]
    } else {
        middle += string[string.length / 2 - 1] + (string[string.length / 2])
        return middle
    }
}

console.log(middleChar(string))