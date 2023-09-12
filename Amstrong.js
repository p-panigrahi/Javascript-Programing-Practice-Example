// filter
const nums = [1, 2, 3, 4];
const result = nums.Filter((num) => {
  return num > 2;
});
console.log(result);

Array.prototype.Filter = function(cb){
  let temp = [];
  for(let i = 0; i < this.length; i++){
    if(cb(this[i],i,this)) temp.push(this[i]);
  }
  return temp;
}