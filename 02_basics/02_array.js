const marvel_hero=["spiderman","ironman","hulk"]
const dc_hero=["batman","superman","bruce"]

// marvel_hero.push(dc_hero)

// console.log(all_hero)
const all_hero=marvel_hero.concat(dc_hero)
console.log(all_hero)

const all_heros=[...marvel_hero,...dc_hero]
console.log(all_heros)


const anothArr=[1,2,3,[,4,5,6],7,8,[34,5,[69,42]]]
const anmtherArr2=anothArr.flat(Infinity)
console.log(anmtherArr2)


console.log(Array.isArray("Raj"))

console.log(Array.from("Raj"))
console.log(Array.from({name: "Raj"})) //interesting

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3))