const coding=["js","pyhton","cpp","java"]

// coding.forEach(function (key){
//     console.log(key)
// })

// coding.forEach((val)=>{
//     console.log(val)
// })


// function printcoding(item){
//     console.log(item)
// }

// coding.forEach(printcoding)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// })


const mycoding=[
    {
        lang:"javascript",
        langfile:"js"

    },
    {
        lang:"pyhton",
        langfile:"py"

    },
    {
        lang:"java",
        langfile:"java"

    }
]
mycoding.forEach((item)=>{
    console.log(item.langfile)
})
