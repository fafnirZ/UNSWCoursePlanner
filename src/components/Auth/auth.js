
import * as queryString from 'query-string';
import axios from 'axios';
import env from "react-dotenv";

const stringifiedParams = queryString.stringify({
  client_id: env.facebook_client_id,
  redirect_uri: '/authenticate/facebook/',
  scope: ['email', 'user_friends'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
});



export const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;
