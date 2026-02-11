const coding=["js","java","css"]
const value=coding.forEach((item)=>{
// console.log(item);
 return item;
})
console.log(value)//for each dont return any value-undefined



//filter
const nums=[1,2,3,4,5,6]
 let result=nums.filter((value)=>{ return value>3})
 console.log(result)//[ 4, 5, 6 ]