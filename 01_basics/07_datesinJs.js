let mydate=new Date();
// console.log(mydate);


// console.log(mydate.toString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())

// console.log(typeof mydate)

// let createdDate=new Date("2003,2,23")
// let createdDate2=new Date(2003,2,23,5,3)
let createdDate3=new Date("2023-02-23")
// console.log(createdDate.toString())
// console.log(createdDate3.toLocaleString())


// let myTimestamp=Date.now()
// console.log(myTimestamp)
// console.log(createdDate3.getTime())
// console.log(Math.floor((Date.now()/1000)))//in seconds

let myDate=new Date()
// console.log(myDate)
// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth()+1)


console.log(myDate.toLocaleString('default',{
    weekday:'long',
    month:'long',
    date:'numeric',
}))
