//singltone
//object.create


// object literal
const mysum=Symbol("key1")

const jsUser = {
    name:"Raj",
    "full name":"Raj Vishwakarma",
    [mysum]: "This is a symbol key",
    age:22,
    email:"raj@example.com",
    dept:"cse",
    isLoggedIn:true,
    lastLoginDays:["Monday","Tuesday","Wednesday"],
}

// console.log(jsUser.email)
// console.log(jsUser["lastLoginDays"])
// console.log(typeof jsUser[mysum])

jsUser.email="raj@gmail.com"
// Object.freeze(jsUser) //freeze the object so that no changes can be made to it
jsUser.email="qwerrt@maiil.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello JS user");
}

jsUser.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());