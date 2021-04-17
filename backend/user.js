const userData = require('./userData.js');

let userdata = {
	
}

function get_all_user_data() {
	userData.read_data().then(response=> {
		console.log(response);
	})
}



function store_user_data(data) {
	console.log('stored');
	userData.read_data()
	.then(response => {
		const facebookId = data.facebookId;
		if(response[facebookId] === undefined){
			response[facebookId] = data;
			userData.write_data(response);
		}
	})


	//insert blank


}

function get_user_course_data(facebookId) {
	return new Promise((resolve,reject)=>{



		userData.read_data().then(response=> {
			//console.log('userdat=', response);
			try {
				/*
				console.log(facebookId)
				console.log(response)
				*/
				resolve(response[facebookId].courseData);
			}
			catch(err) {
				console.log(err);
				resolve(null);
			}
		})

	})


}

function add_user_course_data(facebookId, data) {
	//const userdata = userData.data;

	//console.log(userdata[facebookId])
	//userdata[facebookId].courseData = data;
	//userData.write_data();
	userData.read_data().then(response=> {
		response[facebookId].courseData = data;
		userData.write_data(response);
	})
}



exports.store_user_data = store_user_data;
exports.get_all_user_data = get_all_user_data;
exports.get_user_course_data = get_user_course_data;
exports.add_user_course_data = add_user_course_data;