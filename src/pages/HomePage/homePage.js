import react from 'react'
import Button from '@material-ui/core/Button'
import './homePage.css'


export default function HomePage() {

    return (
        <div>
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
                    {/* Welcome to UNSW Course Planner */}
                </div>
                    
                </div>
            </div>

            <div className="Footer">
            </div>

        </div>

    );    
}