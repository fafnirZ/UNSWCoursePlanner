const userData = require('./userData.js');


function get_all_user_data() {

	for(var key in userData.data) {
		console.log(key);
	}


}

exports.get_all_user_data = get_all_user_data;