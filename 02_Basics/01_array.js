// array
const myArr=[15,1,2,3,4,5];
// for(let i=0;i<6;i++){
//     console.log(myArr[i]);  
// }
const myArr2=new Array(1,2,3,4,5)
//console.log(myArr[0]);


// //array method
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);

//myArr.unshift(9)
myArr.shift()
// console.log(myArr);
// console.log(myArr.indexOf(2));


const newArr=myArr.join()
console.log("A ",myArr);
// console.log(newArr);
// console.log(typeof newArr);
const myn1= myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);


const myn2=myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

