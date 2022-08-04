//imports
const express = require('express');
const app = express();
const noteData = require('./db/db.json')

const PORT = 3001;

//HTML routes
//TODO: add html routes for GET /notes to return notes.html and GET * to return index.html

//API routes
//TODO: below should read the db.json file and return all saved notes
app.get('/api/notes', (req, res) => {
    res.send('Get notes route working')
})

//TODO: below should recieve a new note to save on the request body, add it to the db.json file and return new note to client - don't forget to add unique id!
app.post('/api/post', (req, res) => {
    res.send('Post notes route working!')
})

//make the server listen
app.listen(PORT, () => {
    console.log(`API server at http://localhost:${PORT}`)
})