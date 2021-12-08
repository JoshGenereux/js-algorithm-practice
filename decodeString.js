
let string = "2fcjjm";

const decodeString = (string) => {
    let shift = +string[0]
    let decode = ""
    let char;
    for(let i = 1; i < string.length; i++){
        char = string.charCodeAt(i) + shift
        decode += String.fromCharCode(char)
    }
    return decode
}

