let s  = 'aaaabbbbccccczzzznnnn'

function printerErrors(s){
    let length = s.length;
    let bad = 0;
    let acceptable = (/[n-z]/);
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i).match(acceptable)){
            bad++;
        }
    }
    if(bad > 0){
        return `${bad}/${length}`;
    }

    return `0/${length}`;
}

console.log(printerErrors(s))