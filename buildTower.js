
let num = 6;

const towerBuilder = (num) =>{
    let array = []
    for(let i = num - 1; i >= 0; i--){
        array.push(" ".repeat(num -i -1) + "*".repeat(i * 2 + 1) + " ".repeat(num - i - 1))
    }
    return array
}

console.log(towerBuilder(num))