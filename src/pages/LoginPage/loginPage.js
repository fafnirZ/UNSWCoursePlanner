import './loginPage.css';
import Navbar from '../../components/Nav/nav.js'
import LoginForm from '../../components/LoginForm/LoginForm.js'

function LoginPage(props) {
    return (
        <div className="LoginPage">
            <div className="LoginPrompt">
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;
