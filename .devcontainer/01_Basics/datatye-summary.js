//premitive datatype

//7tyeps: String,Number,Boolean,null,undefine,Symbol,BigInt

const score=100
const scoreValur=100.3

const isLoggedIn=false;
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=3456784521254545454545454543n;
console.log(typeof bigNumber);


//refernce datatype(Non primitive)
//Array,object,Function

const heros=["Shakitman","naafgraj","antman"]

let myObj={
    name:"pawan",
    age:22
}

// console.log(myObj);

const myFunction=function(){
    console.log("Hello Pawan");
    
}

console.log(typeof myFunction);

//+++++++++++++++++++//
//Stack((Primitive) and heap memory(Non-Primitive)
let myYourtubename="pawan"
let anothername=myYourtubename
console.log(anothername)


let user={
    email:"pawanpatle.com",
    upi:"user@ybl"
}

let user2=user
user2.upi="Pawan@ybl"
console.log(user2);
