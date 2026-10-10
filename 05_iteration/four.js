const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
for (const key in myobj) {
        // console.log(`${key} shortcut for ${myobj[key]}`)
}

const program=["js","java","cpp","pyhton"]

for (const key in program) {
    // console.log(program[key])
}

const map = new Map()
map.set('IN',"INDIA")
map.set('PR', "PARIS")
map.set('JP', "JAPAN")

for (const key in map) {
    console.log(map)
}
