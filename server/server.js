const path = require('path');
const express = require('express');
const db = require('./model/db.js')

const app = express();

const PORT = 3000;

app.use(express.json());

// ***** This test works to our DB! *******

app.get('/api/users', (req, res) => {
  const queryText = 'SELECT * FROM users'
  db.query(queryText)
    .then(data => {
      res.json(data.rows)
    }).catch(err => {
      res.json(err)
    })
});

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

app.use((req, res) => res.sendStatus(500));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
