const name="pawan"
const repoCount=50

//console.log(name+repoCount+" value"); not use

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//this is modern way and most efficient

const getName= new String('Pawan-hc-patle')
console.log(getName.__proto__);

// console.log(getName.length);
// console.log(getName.toUpperCase());
// console.log(getName.charAt(2));
// console.log(getName.indexOf('h'));

// const newString=getName.substring(0,4)
// console.log(newString);


// const anotherString=getName.slice(-7,4)
// console.log(anotherString);

// const newStringOne="  pawan  "
// console.log(newStringOne);
// console.log(newStringOne.trim())


const url="https://pawan.com/pawan%20patle"
console.log(url.replace('%20','-'))


console.log(url.includes('sundar'));

console.log(getName.split('-'));


