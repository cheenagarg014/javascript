const user={
    email:"jahga@gada.com",
    fullname:{
        first:"hadja",
        last:"asg"
    },
}
console.log(user.fullname.last)
console.log(Object.keys(user))//[ 'email', 'fullname' ]-return array of keys
console.log(Object.values(user))


//methods
const obj1={
    1:"hjad",
    2:"hsdhs"
}
const obj2={
    4:"hjad",
    3:"hsdhs"
}
 const obj3=Object.assign(obj1,obj2)
 console.log(obj3)
 console.log({...obj1,...obj2})//spread operator
 


 //Array of object
 const user1=[
    {
    id:1,
    name:"dhsj"
 },
  {
    id:2,
    name:"dhsj"
 },
  {
    id:3,
    name:"dhsj"
 }
]
console.log(user1[1].name);


const course={
    name:"js",
    price:"100"
}
const{price:cost}=course//detructure the value with change name
console.log(cost)//100

//JSON
// {
//     "name":"qwert",
//     "price":100
// }
