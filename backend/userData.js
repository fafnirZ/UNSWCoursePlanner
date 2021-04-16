const fs = require('fs');

let userData = {
	
}

function read_data() {
	fs.readFile(`${process.cwd()}/backend/data/userData`, (err, data)=> {
	  if (err) throw err;
	  data = JSON.parse(data);
	  userData = data;
	});
}

function write_data() {
	fs.writeFile(`${process.cwd()}/backend/data/userData`, JSON.stringify(userData), (err)=> {
	  if (err) throw err;
	});
}



exports.data = userData;
exports.write_data = write_data;
exports.read_data = read_data;