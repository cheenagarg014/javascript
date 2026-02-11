//for of(return value)-map array not on object
const arr=[1,2,3,4,5]
for (const value of arr) {
    console.log(value);
}


//for in(return only keys)-object,array
const myobj={
    name:"js",
    age:10
}
for(const key in myobj){
    //console.log(key)//return key only
    console.log(`${key}  is for ${myobj[key]}`)//name shortcut is for js
                                                       // age shortcut is for 10
}


//for each
const arr2=["js","qwe"]
arr2.forEach( function(value,index,arr){//call back fun without name
   console.log(value,index,arr)
})


const coding=[
    {
    name:"js",
    price:100
},
{
    name:"css",
    price:199
}
]
coding.forEach((item)=>{
console.log(item.name)
})