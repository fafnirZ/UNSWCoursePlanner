const express = require('express')
//const mongoClient = require('./db_client.js')
require('dotenv').config();

const bodyParser = require("body-parser");


const cors = require('cors')

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
	console.log('login');
	user.store_user_data(req.body.data);
	//user.get_all_user_data();

	res.send({})
})

app.get('/getCourses', (req, res) => {

	//res.send({'data': user.get_user_course_data(req.query.facebookId)});
	user.get_user_course_data(req.query.facebookId)
	.then(response=>{
		console.log(response)
		res.send({'data': response})
	})
})


app.post('/postCourses', (req, res)=> {

	user.add_user_course_data(req.body.data.facebookId, req.body.data.courseData);
	//user.get_all_user_data();
	res.send({});
})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})