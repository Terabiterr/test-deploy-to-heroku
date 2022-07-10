const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
  res.send('Main page!!!');
});