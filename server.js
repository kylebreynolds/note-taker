const fs = require('fs');
const path = require('path');

const express = require('express');
const PORT = process.env.PORT || 3001;


const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

const { db } = require('./develop/db/db.json');

function createNewNote(body, noteArray) {
    console.log(body);
    // our function's main code will go here!
  const note = body;

  noteArray.push(note);
    // return finished code to post route for response
    fs.writeFileSync(
        path.join(__dirname, './develop/db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
      );

    return note;
  }

app.get('/api/db', (req, res) => {
    res.json(db);
  });

  app.post('/api/db', (req, res) => {
    // req.body is where our incoming content will be
    req.body.id = db.length.toString();
    const note = createNewNote(req.body, db);
    res.json(req.body);
  });

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });