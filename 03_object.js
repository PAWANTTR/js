//singleton
//object literals
const Jsuser={
    name:"Pawan",
    "full name":"Pawan Patle",
    age:18,
    location:"Nagpur",
    email:"pawanpatle@gmail.com",
    idLoggedIn:false,
    lastLognDays:["Monday","Saturday"]
}

//console.log(Jsuser.email);
//console.log(Jsuser["full name"]); //to extract string
//console.log(Jsuser.location);

Jsuser.email="patlepawn@gmail.com"
//console.log(Jsuser.email);
//Object.freeze(Jsuser)
Jsuser.email="pawan@micrsoft.com"
//console.log(Jsuser);

Jsuser.greeting= function(){
    console.log("Hello ps5 user");
}

Jsuser.greeting2= function(){
    console.log(`Hello ps5 user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());


