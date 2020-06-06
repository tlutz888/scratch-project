const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000;

app.use((req, res) => res.sendStatus(500));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
