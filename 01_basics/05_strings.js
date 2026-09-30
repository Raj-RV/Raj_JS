const name="Raj"
const score=100


// console.log(name + score + "value")

console.log(`My name is ${name} and my score is ${score}`)

const gameName=new String("Cricket-by-raj")

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf("C"))

const newName=gameName.substring(0,3)
console.log(newName)

const newName2=gameName.slice(-7,-2)
console.log(newName2)

const newName3="  raj  "
console.log(newName3)
console.log(newName3.trim())       

let url="https://raj-goolge.com%20kuch"

// console.log(url.replace("%20","-"))
// console.log(url.includes("%30"))

console.log(gameName.split("-"))