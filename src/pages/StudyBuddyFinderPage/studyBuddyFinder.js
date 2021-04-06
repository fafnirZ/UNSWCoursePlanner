import react from 'react'
import Navbar from '../../components/Nav/nav.js'
import StudyBuddy from '../../components/StudyBuddyBox/studyBuddyBox.js'
import './studyBuddyFinder.css'



function StudyBuddyFinder() {

    return (
        <div className="studyBuddyFinder">
            <div className="Header">
				<Navbar />
			</div>
        
            <div className="sBody">
                <StudyBuddy />
            </div>
            
            <div className="Footer">
            </div>
        </div>

    );    
}
export default StudyBuddyFinder;
