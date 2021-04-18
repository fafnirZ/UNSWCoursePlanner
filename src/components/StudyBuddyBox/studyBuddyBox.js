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

                <div className="StudyBuddyBox-CommentBox">
                    <Toggle render={({on, toggle}) => (
                        <div>
                            <div className="StudyBuddyBox-Comments" onClick={toggle}> @akaratas commented: Looking for a study buddy who is free on tuesday afternoons.
                            <br></br>
                            Contact me via email on z5311022@ad.unsw.edu.au (Click to show/hide replies)</div>
                            {on && 
                            <div className="StudyBuddyBox-CommentReply">
                                &#8627; @jxie replied: I sent you an email
                            !</div>
                        }
                        </div> 
                    )} />
                    
                    <div className="StudyBoxLike">
                        Like
                    </div>
                    <div className="StudyBoxReply">
                        Reply
                    </div>

                    <br></br>

                    <Toggle render={({on, toggle}) => (
                        <div>
                            <div className="StudyBuddyBox-Comments" onClick={toggle}> @hsaeed commented: Looking to some study buddies to work on homework questions with.
                            <br></br>
                            My email is z5311025@ad.unsw.edu.au (Click to show/hide replies)</div>
                            {on && 
                            <div className="StudyBuddyBox-CommentReply">&#8627; @douyang replied: I would love to work on homework questions. Sent you an email!</div>
                        }
                        </div> 
                    )} />
                    <div className="StudyBoxLike">
                        Like
                    </div>
                    <div className="StudyBoxReply">
                        Reply
                    </div>
                </div>

                <div className="StudybuddyBox-NewCommentBox">
                    Type a new comment here...
                    
                </div>
            </div>
        </div>


    )
}

export default StudyBuddy;