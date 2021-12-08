let array = [5,6,3,7,66,55,44,77,2,5,6,4]

const sumOfTwo = (array) =>{
    let num1 = Number.MAX_SAFE_INTEGER
    let num2 = Number.MAX_SAFE_INTEGER

    for(let i = 0; i < array.length; i++){
        if(array[i] < num1){
            num1 = array[i]
            console.log(`${num1} = num1`)
        } else if(array[i] < num2 && array[i] > num1){
            num2 = array[i]
            console.log(`num2 = ${num2}`)
        }
    }
    return num1 + num2;
}

console.log(sumOfTwo(array))

