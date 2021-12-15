
let roman = "LXXXXVIIII"

const romanNumerals = (roman) =>{
    let map = new Map;
    map.set("I", 1)
    map.set("V", 5)
    map.set("X", 10)
    map.set('L', 50)
    map.set('C', 100)
    map.set('D', 500)
    map.set('M', 1000)

    let romanNum = 0;

    for(let i = 0; i < roman.length; i++){
        let num = roman[i]
        romanNum += map.get(num)
    }
    return romanNum
}

console.log(romanNumerals(roman))


