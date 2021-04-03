import react from 'react'
import Navbar from '../../components/Nav/nav.js'
import StudyBuddy from '../../components/StudyBuddy/studyBuddy.js'
import './studyBuddyFinder.css'



function StudyBuddyFinder() {

    return (
        <div className="studyBuddyFinder">
            <div className="Header">
				<Navbar />
			</div>
        
            <div className="Body">
                <div className="textbox">
                    <h1>Programming Fundamentals | COMP1511</h1>
                </div>
                <div className="StudyBuddyFinder">
                    <StudyBuddy />
                </div>
            </div>

            <div className="Footer">
                <h1>Smelly Footer</h1>
            </div>

        </div>

    );    
}
export default StudyBuddyFinder;
