//singleton
//const tinderUser=new Object()

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Pawan"
tinderUser.isLoggedIn=false;

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Pawan",
            lastname:"Patle"
        }
    }
}

console.log(regularUser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"pawanpatlee718@gmail.com"
    },
    {
        id:1,
        email:"pawanpatlee718@gmail.com"
    },
    {
        id:1,
        email:"pawanpatlee718@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js",
    price:"999",
    courseInstructor:"pawan"
}
//course.courseInstructor
const {courseInstructor}=course
console.log(courseInstructor);
