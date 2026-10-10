
let arr=[1,2,3,4,5]


for (const nums of arr) {
    // console.log(nums)
}


let greeting="hello world"

for (const greet of greeting) {
    // console.log(`each char is ${greet}`)
}


//Map

const map = new Map()
map.set('IN',"INDIA")
map.set('PR', "PARIS")
map.set('JP', "JAPAN")


// console.log(map)

for (const [key,value] of map) {
    // console.log(key,"=>", value)
}

const myobj={
    game1:"NFS",
    game2:"pubg"
}

// for (const [key ,value] of myobj) {
//     console.log(KeyboardEvent,"=>",value)
// }