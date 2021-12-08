
let a = [5,4,3,2,1,5,4,3,2,10,10];
let A =  [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]

const findOdd = (a) => {
    if(a.length === 1){
        return a[0]
    }
    let map =  new Map;
    for(let i = 0; i < a.length; i++){
        let count = 1;
        if(map.has(a[i])){
            count = map.get(a[i])
            count ++;
            map.set(a[i], count)
        } else {
            map.set(a[i], count)
        }
    }
    let answer;
    map.forEach((element, key) => {
        if(element % 2 !== 0){
            answer = key;
        }
    })
    return answer;
}

console.log(findOdd(A))