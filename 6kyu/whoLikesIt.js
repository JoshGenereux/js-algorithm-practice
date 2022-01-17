let names = ['alex']
let names2 = ['alex','jacob']
let names3 = ['john', 'marc', 'james']
let names4 = ["jessy", 'jessica', 'james','julie','jack','julian','jerry']


function likes(names){
    let string;
    let num = names.length - 2;
    switch (names.length){
        case 0:
            string = "no one likes this";
            break
        case 1:
            string = `${names[0]} likes this`
            break
        case 2:
            string = `${names[0]} and ${names[1]} like this`
            break
        case 3:
            string = `${names[0]}, ${names[1]} and ${names[2]} like this`
            break
        default:
            string = `${names[0]}, ${names[1]} and ${num} others like this`
            break
    }
    return string;
}

console.log(likes(names))
console.log(likes(names2))
console.log(likes(names3))
console.log(likes(names4))