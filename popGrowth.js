
let pop = 1500;
let percent = 5;
let aug = 100;
let surpass = 5000;

const populationGrowth = (pop, percent, aug, surpass) => {
    let count = 0;
    while(pop < surpass) {
        let growth = pop / 100 * percent + aug
        pop += growth
        console.log(pop)
        count++
    }
    return count
}

console.log(populationGrowth(pop, percent, aug, surpass))