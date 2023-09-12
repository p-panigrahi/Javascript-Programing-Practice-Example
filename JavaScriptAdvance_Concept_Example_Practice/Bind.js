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

function getEmail(){
    return  `${this.firstName}.${this.lastName}@test.com`;
}
console.log(getEmail.bind(teacher));