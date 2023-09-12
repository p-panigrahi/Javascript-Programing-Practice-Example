// Example-1
let students =
    {
        firstName : "Prabhudutta",
        lastName : "Panigrahi",
        age : 25
    }

let teacher = {
    firstName : "Sudhakar",
    lastName : 'Sharma',
    age : 40
}

function getEmail(sub1,sub2){
    return  `${this.firstName}.${this.lastName}@test.com`;
}
function getEmail1(sub1,sub2){
    console.log(sub1,sub2);
}

console.log(getEmail1.apply(students,["45",'78']));
console.log(getEmail1.call(teacher,"Math","English"));