
let wishList = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
]

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
]

const giftGuesser = (wishList, presents) => {
    let size;
    let clatters;
    let weight;
    let guessGifts = []
    for(let i = 0; i < wishList.length; i++){
        size = wishList[i].size;
        clatters = wishList[i].clatters;
        weight = wishList[i].weight;
        console.log(size, clatters, weight)
        for(let j = 0; j < presents.length; j++){
            if(size === presents[j].size && weight === presents[j].weight && clatters === presents[j].clatters){
                guessGifts.push(wishList[i].name)
            }

        }

    }
    return guessGifts;
}

console.log(giftGuesser(wishList, presents))