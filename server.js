//imports
const express = require('express');
const app = express();
const { notes } = require('./db/db.json')
//npm to create unique id numbers
// const uniqid = require('uniqid')
const fs = require('fs')
const path = require('path')
const PORT = 3001;

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }))
//parse incoming JSON data
app.use(express.json())
//allow access to files in public
app.use(express.static('public'))


function createNewNote(body, notesArray) {
    const newNote = body
    notesArray.push(newNote)
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    )
    return newNote
}

//API routes
app.get('/api/notes', (req, res) => {
    let results = notes
    res.json(results)
})

//HTML routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.post('/api/notes', (req, res) => {
    //set id to notes
    req.body.id = notes.length.toString()
    const newNote = createNewNote(req.body, notes)
    res.json(newNote)
})

//HTML wildcard route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

//make the server listen
app.listen(PORT, () => {
    console.log(`API server at http://localhost:${PORT}`)
})