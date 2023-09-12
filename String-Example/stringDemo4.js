// How to get Number of Occurence of Latter in specified string in javascript

function count_occurence(str)
{
    if(str.length === 0)
    {
        console.log("Invalid String");
    }
    for(let i = 0; i < str.length; i++)
    {
        let count = 0;
        for(let j = 0; j < str.length; j++)
        {
            if(str[i] === str[j] && i > j)
            {
                break;
            }
            if(str[i] === str[j])
            {
                count++;
            }
        }
        if(count > 0)
            console.log(`${str[i]} ${count} times`)
    }
}
const test = "AmAn";
console.log(count_occurence(test));