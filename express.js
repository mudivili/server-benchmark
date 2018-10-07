const express = require('express');
const app = express();
const port = 3000;
const data = require('./data');

app.get('/', (req, res) => res.send(data));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));