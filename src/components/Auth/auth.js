
import * as queryString from 'query-string';
import axios from 'axios';


function get_app_id() {
	var APP_ID;
	axios.get('localhost:8080/APP_ID')
		.then(response => {
			console.log(response.data);
			APP_ID = response.data;
		});

	console.log(APP_ID);

}


const stringifiedParams = queryString.stringify({
  client_id: get_app_id(),
  //redirect_uri: 'https://127.0.0.1/authenticate/facebook/',
  scope: ['email', 'user_friends'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
});

export const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;

