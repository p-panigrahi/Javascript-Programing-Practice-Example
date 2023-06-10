
// Example-1
// const ticket = new Promise((reslove,reject)=>{
//     const isBorded = true;
//     if(isBorded){
//         reslove("Your Flight Is Ready");
//     }else{
//         reject("Your Flight is cancelled");
//     }
// })
// ticket.then((data)=>{
//     console.log("ooo yaaa",data);
// })
// .catch((errData)=>{
//     console.log("OO no",errData);
// })
// .finally(()=>{
//     console.log("I am Allwayas excute");
// });

// Example-2
// function getCheese(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             const cheese = 'This is a Cheese';
//             reslove(cheese);
//         },2000)
//     })
// }
// function makeDough(cheese){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             const dough = 'This is a dough';
//             reslove(dough);
//         },5000)
//     })
// }
// function bakePizza(dough){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             const pizza = 'This is a pizza';
//             reject(pizza);
//             // reslove(pizza);
//         },6000)
//     })
// }
// getCheese().then((cheese)=>{
//     console.log("Here Is My Cheese");
//     return makeDough(cheese);
// })
// .then((dough)=>{
//     console.log("Here is My Dough");
//     return bakePizza(dough);
// })
// .then((pizza)=>{
//     console.log("Here is My Pizza");
// })
// .catch(()=>{
//     console.log("The Pizza is Lowquelty");
// })