import react from 'react'
import Navbar from '../../components/Nav/nav.js'
import StudyBuddy from '../../components/StudyBuddyBox/studyBuddyBox.js'
import OurButton from '../../components/Button/button.js'
import './studyBuddyFinder.css'



function StudyBuddyFinder() {
    const buttons = () => {
        return [
            <OurButton name="Home"href="/dashboard"/>,
            <OurButton name="course review" href="/reviewpage"/>
        ]
    }
    return (
        <div className="studyBuddyFinder">
            <div className="Header">
				<Navbar contains={buttons}/>
			</div>
        
            <div className="sBody">
                <StudyBuddy />
            </div>
            
        </div>

    );    
}
export default StudyBuddyFinder;
