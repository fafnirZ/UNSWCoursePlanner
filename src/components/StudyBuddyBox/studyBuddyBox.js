import react from 'react'
import './studyBuddyBox.css'
// import Toggle from '../Toggle/toggle.js'

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
                    <div className="StudyBuddyBox-Comment">
                        <div className="StudyBuddyBox-CommentMessage">
                            @akaratas commented: Looking for a study buddy who is free on tuesday afternoons.
                            <br></br>
                            Contact me via email on z5311022@ad.unsw.edu.au
                        </div>

                        <div className="StudyBuddyBox-CommentReply">
                            &#8627; @jxie replied: I sent you an email!
                            <br></br>
                            &#8627; @mlee replied: What times are you free on Tuesdays?
                        </div>

                    </div>
                    <div className="StudyBuddyBox-Like">
                        Like
                    </div>
                    <div className="StudyBuddyBox-Reply">
                        Reply
                    </div>


                    <div className="StudyBuddyBox-Comment">
                        <div className="StudyBuddyBox-CommentMessage">
                            @akaratas commented: SECOND COMMENT.
                        </div>

                        <div className="StudyBuddyBox-CommentReply">
                            &#8627; HELLO HELLO
                        </div>

                    </div>
                    <div className="StudyBuddyBox-Like">
                        Like
                    </div>
                    <div className="StudyBuddyBox-Reply">
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


{/* <div>
    @hsaeed commented: Looking to some study buddies to work on homework questions with. My email is z5311025@ad.unsw.edu.au
    <Toggle render={({on, toggle}) => (
        <div>
            <div className="StudyBuddyBox-Comments" onClick={toggle}>View Replies</div>
            {on && 
            <div className="StudyBuddyBox-CommentReply">&#8627; @douyang replied: I would love to work on homework questions. Sent you an email!</div>
        }
        </div> 
    )} />
    <div className="StudyBuddyBox-Like">
        Like
    </div>
    <div className="StudyBuddyBox-Reply">
        Reply
    </div>
</div> */}