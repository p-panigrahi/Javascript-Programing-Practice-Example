// Example-1
// function outerFn(){
//     var msg = "This is outerMember";
//     function innerFn(){
//         var outerMessage = msg;
//         var innerMsg = 'This is innerMember';
//         return outerMessage + innerMsg

//     }
//     const innerAndOuterValue = innerFn();
//     console.log(innerAndOuterValue);
// }
// outerFn();

// // Example-2
// const a = (b)=>{
//     var c = 3;
//     const d = ()=>{
//         var sum = c + b;
//         console.log(`Sum of ${c} and ${b} is ${sum}`);
//     }
//     return d;
// }
// const add = a(5);
// const result = add();
// console.log(result);