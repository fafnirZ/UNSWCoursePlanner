const userData = require('./userData.js');


function get_all_user_data() {
	const userdata = userData.data;
	for(var key in userdata) {
		console.log(key,':',userdata[key]);
	}
}



function store_user_data(data) {
	const userdata = userData.data;
	const facebookId = data.facebookId;

	userdata[facebookId] = data;

}



exports.store_user_data = store_user_data;
exports.get_all_user_data = get_all_user_data;