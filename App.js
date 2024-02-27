console.log("Starting app")
const fs = require ("fs");
const notes = require("./Notes")
// fs.appendFileSync("Welcome.txt", "Hello Guys")
// console.log(notes.sum(4, 6))
const yargs = require("yargs")

const abc = yargs.argv

const title = yargs.argv.title
const body = yargs.argv.body
const command = yargs.argv._[0]

if (command==="add"){
    console.log("Adding note");
    notes.addingNote(title, body)
} else if (command==="remove"){
    console.log("Removing note");
}else if (command ==="read"){
        console.log("Reading note");
}else if (command ==="List"){
            console.log("Listing all note")
}else{
                console.log("Unknow commmand was used")
            }
        