const email=[]

if(email){
    // console.log("You have an email");
}else{
    // console.log("dont have email");
}

// falsy values

// false , 0, -0, "", BigInt ,0n, null, undefined, NaN

// truthy values

// "0", "false", [], {}, function(){}



// const userEamil=[]

// if(userEamil.length===0){
//     console.log("Array is empty");
// }

// const obj = {}

// if(Object.keys(obj).length===0){
//     console.log("Object is empty");
// }


// nullish coalescing operator (??): null undefined

let val1

// val1=5??10
// val1=null??10
// val1 = undefined??10
val1 = null ?? 5 ?? 20

// console.log(val1)

// ternary operator

const penPrice=10

penPrice < 80 ? console.log("less then 80") : console.log("more then 80")
