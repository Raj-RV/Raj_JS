// function

// function name (){
//     console.log("R");
//     console.log("A");
//     console.log("J");
// }

// name()


// function addTwoNumber(num1,num2){//parameter
//     console.log(num1+num2);
// }

function addTwoNumber(num1,num2){//parameter
    // let result = num1+num2;
    // return result;
    return num1+num2;
}
const result = addTwoNumber(2,3)//argument

// console.log(result)

function isUserloggedIn(userName){
    if(!userName){
        // console.log("Please provide a user name")
        return;
    }
    return `${userName} is logged in`
}
// console.log(isUserloggedIn("Raj"))
// console.log(isUserloggedIn("raj"))



function calCartprice(val1,val2,...num1){//rest parameter
    return num1;
}
// console.log(calCartprice(1000,23,655,122))

const user = {
    name:"Raj",
    price:1000,
}

function handleobject(anyobject){
    //console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`)
}

// handleobject(user)
handleobject({
    name:"sam",
    price:2300,
})


const myArray = [100,200,300,400,500]

function handleArray(anyArray){
    return anyArray[3]
}

// console.log(handleArray(myArray))

console.log(handleArray([1,2,3,4,5,6,7,8,9]))