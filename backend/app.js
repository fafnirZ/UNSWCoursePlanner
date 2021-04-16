const express = require('express')
//const mongoClient = require('./db_client.js')
require('dotenv').config();

const bodyParser = require("body-parser");
const cors = require('cors')
const UserFunctions = require('./user.js')

const app = express()
const port = 8080

const user = require('./user.js');

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
	res.send('Hello World!')
	//mongoClient();
})


app.post('/login', (req, res) => {

	//console.log(req.body.data);
	user.store_user_data(req.body.data);
	user.get_all_user_data();
	res.send({})
})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})