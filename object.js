//singleton-constructor se singleton obj bnta hai-Object.create


const mysymbol=Symbol("key")

//objects literals
const user={
   name:"cdhs",//by default key treat as string
   "full name":"dvhjdgdj" ,//can;t access it now using dot(.)
   [mysymbol]:"mykey1",//syntax to decalare symbol
   age:10,loc:"pune",
   email:"gfjshfg@gmail.com",
   islogges:false,
   logindays:["mon","sat"]
}

// console.log(user.name);
// console.log(user["name"])//  using[] to accees
// console.log(user["full name"]);
// console.log(user[mysymbol]);
// Object.freeze(user)//to freeze value



user.greet=function(){
    console.log(`hello ji ${this.name}`)
}
console.log(user.greet);//return function refernce-[Function (anonymous)]
console.log(user.greet());