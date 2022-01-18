let array = ['a', 'b', 'c', 'd', 'f','g']

function findMissingLetters(array){
    let num;
    let missing;
    for(let i = 0; i < array.length; i++){
        num = array[i].charCodeAt(array[i])
        array[i] = num;
        console.log(array)
    }
    for(let i = 1; i < array.length; i++){
        if(array[i] - array[i -1] !== 1){
            missing = array[i -1] + 1
        }
    }
    return String.fromCharCode(missing)
}

console.log(findMissingLetters(array))