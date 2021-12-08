
let string = "this is a string"

const balanced = (string)=>{
    if(!string.includes("(") || !string.includes(")")){
        return true;
    }
    let first = ""
    let second = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] === "(" || string[i] === ")"){
            first += string[i]
        } else{
            second += string[i];
        }
    }
    return first === second || first === "()";
}

console.log(balanced(string))