// How to check whether a passed string is palindrome or note in javascript?

function check_palindrome(str){
    let n = str.length-1;
    for(let i = 0; i < n/2; i++){
        let x = str[i];
        let y = str[n-i];
        if(x !== y){
            return false;
        }
    }
    return true;
}
function is_palindrome(str){
    let ans = check_palindrome(str);
    if(ans === true){
        console.log("Passed String is Palindrome");
    }else{
        console.log("Passed String Is not Palindrome");
    }
}
const test = "Aman";
console.log(is_palindrome(test));