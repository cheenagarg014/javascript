// function one(){
//     const name="hsgjhas"
//     function two(){
//         const name1="dgdd"
//         console.log(name);
//     }
//     // console.log(name1);//out of block or scope
//     two()
// }
// one()


const user={
    name:"cheena",
    price:999,
    message: function(){
         console.log(`${this.name} welcome this`)//this used only in object
    }
}
user.message()


function  user1(){
   let name="qwerty"
   console.log(this.name);
}
user1();//undefined this don't work in function


//ARROW FUNCTION
const add=   ()=>{
    let name="chee"
    console.log(name)
}
add();


const addtwo=(num1,num2)=>({username:"mandmsa"})//() no return keyword use with this bracket
console.log(addtwo(9,8));


//IIFE
(function db(){
    console.log("connected db")
})();// ; end the iife code