const fs = require("fs")
const { json } = require("stream/consumers")
// console.log("Starting notes")
// const sum = (a, b) => a + b;
// const sub =(a, b) => a - b;
// module.exports = {
//     sum,
//     sub
// }
const addingNote = (title, body) => {
    let notes;
    try {
        notes.push(JSON.parse(fs.readFileSync("notes.txt")))
    } catch (error) {
        
    }
  

    let note = {
        title,
        body
    }
    notes.push(note)
    fs.writeFileSync("notes.txt", JSON.stringify(notes))
}

module.exports = {
    addingNote
}