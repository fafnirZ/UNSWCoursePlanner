import react from 'react'
import StudyBuddy from '../../components/StudyBuddy/studyBuddy.js'
import Dashboard from '../../pages/DashBoard/dashBoard.js'
import StudySpaceFinder from '../../pages/StudySpaceFinderPage/studySpaceFinder.js'
import {link} from 'react-router-dom';


import './studyBuddyFinder.css'



function HomePage() {

    return (
        <div className="Home">
            <div className="Header">
				<Navbar />
			</div>
        
            <div className="Body">
                <div className="textbox">
                    <h1>Home</h1>
                </div>
                <div className="StudyBuddyFinder">
                    <Link to='/StudyBuddy'>StudyBuddy Finder</Link>
                    <StudyBuddy />
                </div>
                <div className="StudySpaceFinder">
                    <Link to='/StudyFinder'>Study Space Finder</Link>
                    <StudySpaceFinder/>
                </div>
                <div className="reviewPage">
                    <Link to='/reviewPage'>Reviews</Link>
                    <ReviewPage/>
                </div>
                <div className="dashboard">
                    <Link to='/dashBoard'>Dashboard</Link>
                    <DashBoard/>
                </div>
            </div>

            <div className="Footer">
                <h1>Smelly Footer</h1>
            </div>

        </div>

    );    
}
