const user = {
    name:"Raj",
    price:1000,

    welcomeMessage: function(){
        // console.log(`${this.name}, welcome to our website`)
        // console.log(this)
    }
}
user.welcomeMessage()
// user.name="sam"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     let name="Raj"
//     console.log(this.name)
// }
// chai()

// const chai = function(){
//     let name="Raj"
//     console.log(this.name)
// }
// chai()



 const chai = ()   => {
    let name="Raj"
    console.log(name)
}
// chai()


// const addNum =(num1,num2)=>{
//     return num1+num2
// }
// const addNum =(num1,num2)=> (num1+num2)

const addNum =(num1,num2)=> ({username:"raj"})

console.log(addNum(5, 10))