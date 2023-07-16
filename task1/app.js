const fs = require("fs")

const person1 = {
    fname : "Ahmed",
    lname : "hossam",
    city : "alex",
    age : 20 
 }
// const personJ= JSON.stringify(person1) // convert from obj to json
fs.writeFileSync ("file.txt",JSON.stringify(person1))

console.log(fs.readFileSync("file.txt").toString())
const person2 = {
    fname : "adel",
    lname : "ahmed",
    city : "Cairo",
    age : 40 
 }

fs.appendFileSync("file.txt" ,JSON.stringify(person2) )
console.log(fs.readFileSync("file.txt").toString())