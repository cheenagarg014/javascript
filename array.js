let arr=["chee",1,2,5,9]
console.log(arr[1]);

//methods
//console.log(arr.push(6))//returns the length
console.log(arr);

arr.unshift(8)
arr.shift()
console.log(arr);

const arr2=arr.join();
console.log(arr2);//join and change the type also into string


//slice-last index not count and original array not change
//splice-last count but original array change
const arr3=arr.slice(0,2);
console.log(arr3);
console.log(arr);//original array don't change

const arr4=arr.splice(1,2);//start index 0 but count or remove 2 elements
console.log(arr4);
console.log(arr);//original array  change-left out elements