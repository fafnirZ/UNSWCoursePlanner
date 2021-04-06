import react from 'react'
import './studyBuddyBox.css'
import Toggle from '../Toggle/toggle.js'

function StudyBuddy() {
    return (
        <div className="StudyBuddyBox">
            <div className="StudyBuddyBox-heading">
                <h1>Study Buddy Finder</h1>
            </div>
    
            <div className="StudyBuddyBox-Comments">
                <Toggle render={({on, toggle}) => (
                    <div>
                        <div className="StudyBuddyBox-Comments" onClick={toggle}> 1. Someone please help me. I am desperate! (Click to show/hide replies)</div>
                        {on && 
                        <div className="StudyBuddy-reply">
                            <a1>| Hi there. Lets be buddies. My email is z0000000@ad.unsw.edu.au</a1>
                        </div>
                        }
                    </div> 
                )} />
            </div>

            <div className="StudybuddyBox-NewCommentBox">
                comment box
            </div>
        </div>

    )
}

export default StudyBuddy;