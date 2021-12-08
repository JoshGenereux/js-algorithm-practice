
let array = [160,3,1719,19,11,13,-21]

const outlier = (array)=>{
    let odd = []
    let even = []
    for(let i = 0; i <array.length; i++){
        array[i] % 2 === 0 ? even.push(array[i]) : odd.push(array[i])
    }
    return even.length > odd.length ? odd.pop() : even.pop()
}

console.log(outlier(array))