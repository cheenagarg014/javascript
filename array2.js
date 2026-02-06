const array=["chdh","dgdhs","dsdghf"]
const array2=["qw",'wer']
 const arr=array.push(array2)//new length -arr return new length
 console.log(array)//array me push hua array2 now give array itself with push array
// console.log(array);//[ 'chdh', 'dgdhs', 'dsdghf', treated as single array-[ 'qw', 'wer' ] ]
// console.log(array[3][1]);

const con=array.concat(array2)
console.log(con)

console.log(Array.isArray("chdhde"))//false
console.log(Array.from("sdghsd"));//[ 's', 'd', 'g', 'h', 's', 'd' ]
console.log(Array.from({name:"gh"}))//[]