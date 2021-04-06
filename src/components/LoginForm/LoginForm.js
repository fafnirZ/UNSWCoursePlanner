import './LoginForm.css'

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
                <button className="login-buttons-fb">
                    <div className="login-buttons-fb-logo">
                        <img src="facebook.png"/>
                    </div>
                    <div className="login-buttons-fb-name">
                        Login with Facebook
                    </div>
                </button>
                <button className="login-buttons-google">
                    <div className="login-buttons-google-logo">
                        <img src="google.png"/>
                    </div>
                    <div className="login-buttons-google-name">
                        Login with Google
                    </div>
                </button>
            </div>
        </div>
    );
}

export default LoginForm;