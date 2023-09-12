// How to generate all combinations of a string in javascript

let possibleCombination = (str)=>{
    let combination = [];
    for(let i = 0; i < str.length; i++){
        for (let j = i+1; j <str.length; j++){
            combination.push(str.slice(i,j));
        }
    }
    return combination;
}
const test = 'Aman';
console.log(possibleCombination(test));