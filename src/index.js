import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { initFacebookSdk } from './helpers/init-facebook-sdk.js'
import { history } from './helpers/history.js'



initFacebookSdk().then(startApp);

function startApp() { 
    render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('root')
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
