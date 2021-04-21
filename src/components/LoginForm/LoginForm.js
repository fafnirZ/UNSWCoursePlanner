import './LoginForm.css'
import env from "react-dotenv";
import react from 'react';
import axios from 'axios';
import { accountService } from '../../services/account_services.js'
import { history } from '../../helpers/history.js'

function LoginForm (props) {

 
    react.useEffect(()=> {
        // redirect to home if already logged in
        if (accountService.accountValue) {
            history.push('/dashboard');
        }    
    }, [history])

    return(
        <div className="LoginForm">
            <div className="login-logo">
                <div className="login-logo-pic">
                    <img src="unswlogo.png"/>
                </div>
                <div className="login-logo-name">
                    <strong>UNSW Course Planner</strong>
                </div>
            </div>
            <div className="login-buttons">

                <a className="login-buttons-fb" onClick={accountService.login}>
                    <div className="login-buttons-fb-logo">
                        <img src="http://icon-library.com/images/facebook-f-icon/facebook-f-icon-7.jpg"/>
                    </div>
                    <div className="login-buttons-fb-name">
                        Login with Facebook
                    </div>
                </a>

                <a className="login-buttons-google">
                    <div className="login-buttons-google-logo">
                        <img src="whitegoogle.png"/>
                    </div>
                    <div className="login-buttons-google-name">
                        Login with Google
                    </div>
                </a>
            </div>
        </div>
    );
}

export default LoginForm;
