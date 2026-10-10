for (let i = 0; i <=10; i++) {
    // const element = i
    // console.log(element)
}

// for (let index = 0; index < 10; index++) {
//     const element = index
//     if(element==5){
//         console.log("5 is best no.")
//     }
//     console.log(element)
// }

for (let i = 1; i <=5; i++) {
    // console.log(`outer loop value ${i}`)
    for (let j = 1; j <=10; j++) {
        // console.log(`innter loop ${j} inner loop ${i}`)
        // console.log(i + '*' + j + '=' + i*j)
        
    }
    
}


const myArray=["spiderman","batman","superman"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}



for (let i = 1; i <=20; i++){

    if(i==5){
        console.log("detected 5")
        // break
        continue
    }

    console.log(`value of i is ${i}`)   
}