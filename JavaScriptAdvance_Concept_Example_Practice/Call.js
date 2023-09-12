// Example-1
let students =
    {
        firstName : "Prabhudutta",
        lastName : "Panigrahi",
        age : 25,
        getEmail : function(){
            return `${this.firstName}.${this.lastName}@test.com`;
        }
    }

let teacher = {
    firstName : "Sudhakar",
    lastName : 'Sharma',
    age : 40,

}
console.warn(students.getEmail.apply(teacher));
console.warn(students.getEmail.call(teacher));