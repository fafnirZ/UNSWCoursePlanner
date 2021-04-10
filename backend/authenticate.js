//import * as queryString from 'query-string';
//import axios from 'axios';

const queryString = require('query-string');


async function getAccessTokenFromCode(code) {
  const { data } = await axios({
    url: 'https://graph.facebook.com/v4.0/oauth/access_token',
    method: 'get',
    params: {
      client_id: process.env.facebook_client_id,
      client_secret: process.env.facebook_client_secret,
      redirect_uri: '/authenticate/facebook/',
      code,
    },
  });
  console.log(data); // { access_token, token_type, expires_in }
  return data.access_token;
};


async function getFacebookUserData(access_token) {
  const { data } = await axios({
    url: 'https://graph.facebook.com/me',
    method: 'get',
    params: {
      fields: ['id', 'email', 'first_name', 'last_name'].join(','),
      access_token: accesstoken,
    },
  });
  console.log(data); // { id, email, first_name, last_name }
  return data;
};

/*
this function is sent to the front end as a link for href
*/

function FacebookRedirect() {
  const stringifiedParams = queryString.stringify({
  client_id: process.env.facebook_client_id,
  redirect_uri: 'http://localhost:8080/authenticate/facebook/success',
  scope: ['email', 'user_friends'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
  });

  return `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`; 
}


function FacebookSuccess() {
  const urlParams = queryString.parse(window.location.search);
  const code = urlParams.code;
  access_token = await getAccessTokenFromCode(code);
  data = await getFacebookUserData(access_token);

  return data;

}






exports.FacebookRedirect = FacebookRedirect;
exports.FacebookSuccess = FacebookSuccess;
