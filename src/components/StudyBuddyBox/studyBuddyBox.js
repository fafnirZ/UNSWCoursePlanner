import react from 'react'
import './studyBuddyBox.css'
import Toggle from '../Toggle/toggle.js'

function StudyBuddy() {
    return (
        <div className="StudyBuddy-Frame">
            <div className="StudyBuddy-Heading">
                Programming Fundamentals | COMP1511
            </div>
        
            <div className="StudyBuddy-Box">
                <div className="StudyBuddyBox-Heading">
                    Study Buddy Finder
                </div>

                <div className="StudyBuddyBox-Comments">
                    <Toggle render={({on, toggle}) => (
                        <div>
                            <div className="StudyBuddyBox-Comments" onClick={toggle}> 1. Someone please help me. I am desperate! (Click to show/hide replies)</div>
                            {on && 
                            <div className="StudyBuddy-reply">
                                Hi there. Lets be buddies. My email is z0000000@ad.unsw.edu.au
                            </div>
                            }
                        </div> 
                    )} />
                </div>

                <div className="StudybuddyBox-NewCommentBox">
                    Type a new comment here...
                </div>
            </div>
        </div>


    )
}

export default StudyBuddy;