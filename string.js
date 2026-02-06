let name="chess";
let value=10;
//console.log(`${name} and ${value}`);//string interpolation

const gname=new String("chejdfh");//[String: 'chejdfh']
console.log(gname[0]);
console.log(gname.length);
console.log(gname.toUpperCase());

console.log(gname.substring(0,2));
console.log(gname.slice(-5,2));//use neg value

console.log(gname.trim());//remove blank space in string 
console.log(gname.replace("c","0"));
console.log(gname.includes("h"));

console.log(gname.split("e"));//[ 'ch', 'jdfh' ]