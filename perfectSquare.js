
let num = 9;

const perfect = (num) =>{
    let num1 = Math.sqrt(num)
    if(Number.isInteger(num1)){
        num1++
        return num1 * num1
    }

    return -1;
}

console.log(perfect(num))

const perfectLiner = num => Number.isInteger(Math.sqrt(num)) ? (Math.sqrt(num) + 1) * (Math.sqrt(num) + 1) : -1;

console.log(perfectLiner(num))