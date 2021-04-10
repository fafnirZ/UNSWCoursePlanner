const express = require('express')
//const mongoClient = require('./db_client.js')
require('dotenv').config();
const authenticate = require('./authenticate.js')

const app = express()
const port = 8080



app.get('/', (req, res) => {
	res.send('Hello World!')
	//mongoClient();
})


app.get('/authenticate/facebook/', (req, res) => {
	res.send(authenticate.FacebookRedirect());
})








app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})