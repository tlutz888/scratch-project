const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

app.use((req, res) => res.sendStatus(500));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
