import react from 'react'
import './studyBuddy.css'
import Toggle from '../Toggle/toggle.js'

function StudyBuddy() {
    return (
        <div className="StudyBuddy-box">

            <h1>Study Buddy Finder</h1>
            <Toggle render={({on, toggle}) => (
                <div>
                    <div className="StudyBuddy-comment" onClick={toggle}> 1. Someone please help me. I am desperate! (Click to show/hide replies)</div>
                    {on && 
                    <div className="StudyBuddy-reply">
                        <a1 >| Hi there. Lets be buddies. My email is z0000000@ad.unsw.edu.au</a1>
                    </div>
                    }
                </div>
            )} />
        </div>
    )
}

export default StudyBuddy;