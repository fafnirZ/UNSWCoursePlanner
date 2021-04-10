const express = require('express')
//const mongoClient = require('./db_client.js')
const app = express()
const port = 8080



app.get('/', (req, res) => {
  res.send('Hello World!')
  //mongoClient();
})

app.get('/APP_ID', (req, res) => {
	res.send('5330495613659449');
})

app.get('/authenticate/facebook/', (req, res) => {


})








app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})