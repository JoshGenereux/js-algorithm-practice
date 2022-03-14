let word  = 'abcddcba';

function main(input)
{
  let splitInput  = input.split("");
  let reverseArray = splitInput.reverse();
  let reversed = reverseArray.join("");
  console.log(reversed)
  let count = 0;

  for(let i = 0; i < input.length; i++){
    if(input[i] === reversed[i]){
      count++;
    }
  }

  return count;
}

console.log(main(word));