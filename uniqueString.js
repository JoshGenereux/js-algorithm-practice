
let string = "helloworld"

const makeUniqueString = (string) => {
    let newWord = ""
    let map = new Map;
    for(let i = 0; i < string.length; i++){
        if(!map.has(string[i])){
            newWord += string[i]
            map.set(string[i], i)
        }
    }
    return newWord
}

console.log(makeUniqueString(string))

