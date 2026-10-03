let a=100

if(true){
let a=10
const b=20
// var c=30
// console.log("inner :",a)
}

// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const userName = "Raj"

    function two(){
        console.log(userName)
        const age = 23
    }    
    // console.log(age)

    two()
}

// one()

if(true){
    const userName = "Raj"
    if(userName==="Raj"){
        const website=" youtube "
        // console.log(userName+website)
    }
    // console.log(website)
}
// console.log(userName)

// +++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++\


addOne(5)
function addOne(num){
    return num+1
}



const addTwo = function(num){
    return num+2
}
addTwo(5)
