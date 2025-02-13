const express = require('express')
const app = express()
const port = 3000
var path = require('path');

app.use('/', express.static('../purejs'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})