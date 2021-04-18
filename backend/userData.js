const fs = require('fs');


function read_data() {
	return new Promise((resolve, reject) => {
		fs.readFile(`${process.cwd()}/backend/data/userData`, (err, data)=> {
		  if (err) throw err;
		  data = JSON.parse(data);
		  
		  resolve(data);
		});
	})
}

function write_data(data) {
	fs.writeFile(`${process.cwd()}/backend/data/userData`, JSON.stringify(data), (err)=> {
	  if (err) throw err;
	});
}



exports.write_data = write_data;
exports.read_data = read_data;