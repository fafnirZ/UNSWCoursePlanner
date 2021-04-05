import react, {useEffect} from 'react';
import './review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Review (props) {
    return (
        <div className="Review">
            <div className="Title">
                <h1>Reviews</h1>
            </div>
            <div className="Review1">
                <div className="userProfile">
                    <div className="userPhoto">
                        <img src="profile.png"/>
                    </div>
                    <div className="name">
                        <div className="userName">
                            <strong>Martin Le</strong>
                        </div>
                        <div className="date">
                            <strong> Date Posted: 29/03/2021</strong>
                        </div>
                    </div>
                    <div className="react">
                        <button className="like">
                            <FontAwesomeIcon icon = "thumbs-up"/>
                        </button>
                        <button className="dislike">
                        <FontAwesomeIcon icon = "thumbs-down"/>
                        </button>
                        <div className="likeCounter">
                            426
                        </div>
                        <div className="dislikeCounter">
                            23
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <div className="userRating">
                        <strong>Course Rating:</strong> 4.5
                    </div>
                    <div className="compeltionDate">
                        <strong>Term/Year of Completion:</strong> T1 2021
                    </div>
                    <div className="lecturer">
                        <strong>Lecturer:</strong> Fethi Rabhi
                    </div>
                </div>
                <div className="userReview">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ullamcorper massa. Praesent tincidunt metus a suscipit condimentum. Duis tincidunt vitae justo id mollis. Fusce augue urna, efficitur eu sapien quis, condimentum pulvinar est. 
                        Quisque congue, nisl ac egestas pretium, sem lectus gravida sem, vel imperdiet arcu nulla tincidunt nisl. Nulla vel est vitae ligula mollis convallis vitae et nibh. Phasellus luctus tincidunt est, sed accumsan metus mattis a.</p>
                </div>
                <button type="button" className="comments">View 9 replies</button>
                <div class="commentSection">
                </div>
                <form className="reply">
                    <reply>Write a reply...</reply>
                </form>
            </div>
        </div>
    );
}

// Code for expandable comment section
var coll = document.getElementsByClassName("comments");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

export default Review;