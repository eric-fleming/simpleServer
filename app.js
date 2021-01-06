const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 8080;

// middleware plugin to grab static content from the public folder
app.use(express.static('src'));

// default route
app.get('/', (req, res) => {
  res.sendFile('./src/index/index.html', { root: __dirname });
});

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})