const express = require('express');
const path = require('path');

const app = express();
const distPath = path.join(__dirname, '/dist');
const index = path.join(__dirname, 'index.html');

app.use(express.static(distPath));

app.get('/', (req, res) => {
  res.sendFile(index);
});

app.listen(8009, (err) => {
  if (err) throw err;
  console.log(`server running: http://localhost:${8009}/`)
});
