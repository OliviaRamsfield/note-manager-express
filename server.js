//imports
const express = require('express');
const app = express();
const { notes } = require('./db/db.json')
//npm to create unique id numbers
const uniqid = require('uniqid')
const fs = require('fs')
const path = require('path')
const PORT = 3001;

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }))
//parse incoming JSON data
app.use(express.json())

//save notes to local storage
// const savedNotes = document.getElementById("saved-notes")
// const saveIcon = document.getElementsByClassName("save-note")
// const noteTitleText = document.getElementsByClassName("note-title")
// const noteText = document.getElementsByClassName("note-textarea")
// const finishedNote = {title: noteTitleText, body: noteText}

// let noteStorage = localStorage.getItem(notes)
//     ? JSON.parse(localStorage.getItem(notes))
//     : [];

// saveIcon.addEventListener("click", (e) => {
//     e.preventDefault()
//     noteStorage.push(finishedNote)
//     localStorage.setItem(finishedNote, JSON.stringify(noteStorage))
//     listBuilder(finishedNote)
//     noteText = ""
//     noteTitleText = ""
// })

// function createNewNote(body, notesArray) {
//     const note = body
//     notesArray.push(note)
// }

//HTML routes
//TODO: add html routes for GET /notes to return notes.html and GET * to return index.html

//API routes
//TODO: below should read the db.json file and return all saved notes
app.get('/api/notes', (req, res) => {
    let results = notes
    res.json(results)
})

//TODO: below should recieve a new note to save on the request body, add it to the db.json file and return new note to client - don't forget to add unique id!
app.post('/api/post', (req, res) => {
    //set id to notes
    // res.body.id = notes.uniqid.time().toString()

    // //add note to json file and notes array in this function
    const note = createNewNote(req.body, notes)

    res.json(note)
})

//make the server listen
app.listen(PORT, () => {
    console.log(`API server at http://localhost:${PORT}`)
})