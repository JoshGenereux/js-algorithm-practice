
let string = "lmsssmmmslsllslsmss"

const tShirt = (string) =>{
    string = Array.from(string).sort().reverse().join("")
    return string
}

console.log(tShirt(string))

const sorter = (string) => {
    let s = "";
    let m = "";
    let l = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] === "s"){
            s += string[i]
        } else if(string[i] === "m"){
            m += string[i]
        } else if(string[i] === "l"){
            l += string[i]
        }
    }
    return s + m + l
}

console.log(sorter(string))

const switcher = (string) => {
    let s = "";
    let m = ""
    let l = ""
    for(let i = 0; i < string.length; i++){
        switch (string[i]) {
            case "s":
                s += string[i]
                break
            case "m":
                m += string[i]
                break
            case "l":
                l += string[i]
                break
        }
    }
    return s + m + l
}

console.log(switcher(string))