import './LoginForm.css'
import env from "react-dotenv";
import react from 'react';
import axios from 'axios';
import FacebookAuthorise from '../Auth/facebook.js'

function LoginForm (props) {

    const [fbLoginURL, setfbLoginURL] = react.useState("");

    react.useEffect(()=> {
        axios.get('/authenticate/facebook/').then(response => {
            setfbLoginURL(response.data);
        })
    })

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
                <a className="login-buttons-fb" href={fbLoginURL}>
                    <div className="login-buttons-fb-logo">
                        <FacebookAuthorise />
                    </div>
                    <div className="login-buttons-fb-name">
                        Login with Facebook
                    </div>
                </a>
                <a className="login-buttons-google">
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