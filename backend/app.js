const express = require('express')
//const mongoClient = require('./db_client.js')
require('dotenv').config();

const bodyParser = require("body-parser");
const cors = require('cors')
const UserFunctions = require('./user.js')

const app = express()
const port = 8080

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/*
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  //res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
*/

app.get('/', (req, res) => {
	res.send('Hello World!')
	//mongoClient();
})


app.post('/login', (req, res) => {

	console.log(req.body.data);
	res.send({})
})



/*
//send facebook oauth url
app.get('/authenticate/facebook/', (req, res) => {
	res.send(authenticate.FacebookRedirect());
})



app.get('/authenticate/facebook/success', (req, res) => {

	authenticate.getAccessTokenFromCode(req.query.code)
		.then(response => {
			res.send(response);
		})
		.catch(err => {
			console.log(err);
		})


})

app.get('/dashboard', (req, res) => {
	res.send({});
})
*/


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})