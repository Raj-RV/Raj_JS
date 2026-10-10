const myNum=[1,2,3]

// const myTotal=myNum.reduce(function(acc,currval){
//     console.log(`accumulator  is ${acc} ans current value is ${currval}`)
//     return acc+currval

// },0)


// const myTotal=myNum.reduce((acc, currval)=>acc+currval,0)


console.log(myTotal)


const buyCourse=[
    {
        course:"js",
        price:4999
    },
    {
        course:"cpp",
        price:2999
    },
    {
        course:"python",
        price:1999
    }

]

const total=buyCourse.reduce((acc,item)=>(acc+item.price),0)

// console.log(total)