const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { db } = require('./develop/db/db.json');



app.get('/api/db', (req, res) => {
    res.json(db);
  });

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });