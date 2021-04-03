import react from 'react'
import Navbar from '../../components/Nav/nav.js'
import './studyBuddyFinder.css'


function StudyBuddyFinder() {
    return (
        <div className="studyBuddyFinder">
            <div className="Header">
				<Navbar />
			</div>
        
            <div className="Body">
                <div className="textbox">
                    <h1>Textbox</h1>
                </div>
                <div className="Overview">
                    <h1>Overview</h1>
                </div>
                <div className="Review">
                    <h1>Review</h1>
                </div>
            </div>

            <div className="Footer">
                <h1>Smelly Footer</h1>
            </div>

        </div>

    );    
    // More to be done
}
export default StudyBuddyFinder;
