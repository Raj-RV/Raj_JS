// imediately invoked function expression



// const chai=function(){
//     console.log("DB CONNECTED")
// }
// chai()

// (function chai(){
//     console.log("DB CONNECTED")
// })()
// chai()

(()=>{
    console.log("DB CONNECTED")
})();   //use semicolon to execute two iife 


((name)=>{
    console.log(`DB CONNECTED ${name}`)
})("Raj")