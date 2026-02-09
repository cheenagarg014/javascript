function name(){
    console.log("hi fun")
}
name()



function add(num1,num2){
    console.log(num1+ num2);
     
}
const result=add(4,5)// print the value
console.log(result)//undefined-coz function only log the value not return



function addnum(numb1,numb2){
     return numb1+numb2;
    // let res=numb1+numb2
    // return res;
}
const result1=addnum(3,4);
console.log(result1)//7 bcoz return the value




function user(name="qwerty"){//default value
    if(!name){
        console.log(" first enter name");
        return
        
    }
  return `${name} logged in`
}
 console.log(user("vas"));
 console.group(user())//



function shopping(...num1){
  return num1;
}
console.log(shopping(100,200,300)); //[ 100, 200, 300 ]



//using object
const user1={
    name:"hhsd",
    age:10
}
function objectmethod(anyobj){
console.log(`user name is ${anyobj.name} and agr is ${anyobj.age}`)
}
objectmethod(user1);//pass the user object



//using array
const arr=[100,200,300]
function arraymethod(anyarray){
      console.log("array value " + anyarray[2])
}
arraymethod(arr);