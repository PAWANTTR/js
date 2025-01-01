//Dates

// let myDate= new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());


//  let myCretaeddate= new Date(2023,0,23)
// let myCretaeddate= new Date(2023,0,23,5,3)
//let myCretaeddate= new Date("2023-01-14")
// let myCretaeddate= new Date("1-14-2023")
//  console.log(myCretaeddate.toLocaleString());
 let myCretaeddate=new Date("01-01-2025")
let myTimeStamp=Date.now();
// console.log(myTimeStamp)
// console.log(myCretaeddate.getTime());
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})


