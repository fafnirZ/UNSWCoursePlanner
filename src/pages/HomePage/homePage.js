import react from 'react'
import Button from '@material-ui/core/Button'
import './homePage.css'


export default function HomePage() {

    return (
        <div className="home">
            <div className="hHeader">
                <div className="logo">
                    <img src="unswlogo.png"/>
                </div>
                <div className="login">
                    <Button href="/loginpage" variant="contained">
                        login
                    </Button>
                </div>
            </div>
        
            <div className="hBody">
                <div className="hBook">
                    <img src="book.png"/>
                </div>
                <div className="hWelcome">
                <div className="semicircle">
                    <div classname="writing">
                        <span className="writing">Welcome to UNSW Course Planner</span>
                    </div>
                </div>
                    
                </div>
            </div>

            <div className="Footer">
            </div>

        </div>

    );    
}