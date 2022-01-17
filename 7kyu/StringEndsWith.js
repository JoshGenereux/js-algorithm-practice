let string = 'abcadfafefadfadfecd';
let end = 'cd';

function solution(str, ending){
    let size = ending.length;
    let strLength = str.length;
    let l = strLength - size;
    if(str.substring(l, strLength) === ending){
        return true;
    } else {
        return false;
    }
}

console.log(solution(string, end))