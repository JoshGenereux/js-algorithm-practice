
let array = [1,2,3,4,5,6,7,8,9,0]

const phoneNumber = (array)=>{
    let number = '';
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            number += '('
        } else if(i === 3){
            number += ') '
        } else if(i === 6){
            number += '-'
        }
        number += array[i].toString()
    }
    return number;
}

console.log(phoneNumber(array))