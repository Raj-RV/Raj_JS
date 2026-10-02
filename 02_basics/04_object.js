//const user=new Object()

const user={}

user.name="Raj"
user.age=22
user.email="raj@example.com"

// console.log(typeof user);

const newUser={
    email:"rajjj@maildc",
    fullname:{
        firstName:"Raj",
        lastName:"Vishwakarma"
    }
}
// console.log(newUser);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}

// const obj4={obj1,obj2}
// console.log(obj4);

// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2} //spread operator
// console.log(obj3);


const user1=[
    {
        name:"Raj",
        age:22,
        email:"guiyssi.com"
    },
    {
        name:"Raj",
        age:22,
        email:"guiyssi.com"
    },
    {
        name:"Raj",
        age:22,
        email:"guiyssi.com"
    }
]

user1[1].email


// console.log(user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty("nam"))

const course={
    courseName:"JS in hindi",
    price:299,
    courseInstructor:"Raj Vishwakarma"
}
const {courseName:name}=course

console.log(name)
console.log(course["courseInstructor"]);


// {
//     name:"Raj",
//     age:22,
//     email:"raj@gmail.com"
// }








// [
//     {}
//     {}
//     {}
// ]