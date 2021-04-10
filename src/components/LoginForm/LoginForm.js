import './LoginForm.css'
import { facebookLoginUrl } from '../Auth/auth.js';

function LoginForm (props) {
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
                <a className="login-buttons-fb" href={facebookLoginUrl}>
                    <div className="login-buttons-fb-logo">
                        <img src="facebook.png"/>
                    </div>
                    <div className="login-buttons-fb-name">
                        Login with Facebook
                    </div>
                </a>
                <a className="login-buttons-google" href="/dashboard">
                    <div className="login-buttons-google-logo">
                        <img src="google.png"/>
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