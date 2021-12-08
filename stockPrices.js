
const best = (arr) => {
    let profit;
    let big = Number.MIN_SAFE_INTEGER;
    let small = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > big) big = arr[i];
        if(arr[i] < small) small = arr[i];
        if(arr.indexOf(big) > arr.indexOf(small)){
            profit = big - small;
        }
    }
    if(profit){
        return profit
    } else {
        return 0
    }
}
let array = [100]
console.log(best(array))