import React, {useEffect} from 'react'
import courses from '../../data/oldCourseList.json'
import Navbar from '../../components/Nav/nav.js'
import OurButton from '../../components/Button/button.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../components/Course/course.css';
import '../../components/Overview/overview.css'
import '../../components/Review/review.css'
    
const reviewPageTemplate = (props) => {
    
    let {courseCode} = props.match.params
    const course = courses.find(course => course.code === courseCode)
    let {code, title, term, uoc, description} = course
    var courseDescription = course.description.replace( /(<([^>]+)>)/ig, '')

    const buttons = () => {
        return [
            <OurButton name="Home"href="/dashboard"/>,
            <OurButton name="study buddy finder" href="/studybuddyfinder"/>
        ]
    }        
    return (
        <div className="ReviewPage">
            <div className="Header">
                <Navbar contains={buttons}/>
            </div>
            <div className="ReviewBody">
                <div className="course">
                    <div className="Course">
                        <div className="text">
                            <div className="courseName">
                                <strong>{title}</strong>
                            </div>
                            <div className="code">
                                <p>{code} | {uoc} Units of Credit</p>
                            </div>
                            <span className="rating">
                                <FontAwesomeIcon icon = "star"/>
                                <FontAwesomeIcon icon = "star"/>
                                <FontAwesomeIcon icon = "star"/>
                                <FontAwesomeIcon icon = "star"/>
                            </span>
                             <div className="numOfReviews">
                                <p> 4.0 average rating based on 200 reviews</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="overview">
                    <div className="overview_content">
                        <h1>Overview </h1>
                        <p>{courseDescription}</p>                
                    </div>
                </div>
                <div className="review">
                    <div className="Title">
                        <h1>Reviews</h1>
                    </div>
                    <ReviewBox />
                </div>
            </div>
            <div className="rFooter"></div>
        </div>
    )
}
class ReviewTemplate extends React.Component {
    render() {
        return (
            <div className="rreview">
                <div className="ruserProfile">
                    <div className="ruserPhoto">
                        <img src="profile.png"/>
                    </div>
                    <div className="rname">
                        <div className="userName">
                            <strong>{this.props.userName}</strong>
                        </div>
                        <div className="rdate">
                            <strong> Date Posted: {this.props.reviewDate}</strong>
                        </div>
                    </div>
                    <div className="rreact">
                        <button className="rlike">
                            <FontAwesomeIcon icon = "thumbs-up"/>
                        </button>
                        <button className="rdislike">
                        <FontAwesomeIcon icon = "thumbs-down"/>
                        </button>
                        <div className="rlikeCounter">
                            {this.props.reviewLikes}
                        </div>
                        <div className="rdislikeCounter">
                            {this.props.reviewDislikes}
                        </div>
                    </div>
                </div>
                <div className="rdetail">
                    <div className="ruserRating">
                        <strong>Course Rating:</strong> {this.props.reviewRating}
                    </div>
                    <div className="rcompletionDate">
                        <strong>Term/Year of Completion:</strong> {this.props.reviewDateCompleted}
                    </div>
                    <div className="rlecturer">
                        <strong>Lecturer:</strong> {this.props.reviewLecturer}
                    </div>
                </div>
                <div className="ruserReview">
                    {this.props.reviewText}
                </div>
            </div>
        )
    }
}


class ReviewForm extends React.Component {
    render() {
        return(
            <form className= "review-form" onSubmit={this._handleSubmit.bind(this)}>
                <label className= "review-form-title">Create a Review</label>
                <div className="review-form-fields">
                    <input className="review-form-name"
                        placeholder="Name:"
                        ref={input => (this._userName = input)}
                    />{" "}
                    <br />
                    <input className="review-form-rating"
                        placeholder= "Rate this course out of 5..."
                        ref={input => (this._rating = input)}
                    />
                    <input className="review-form-date"
                        placeholder = "Term/Year Completed:"
                        ref= {input =>(this._dateCompleted = input)}
                    />
                    <input className="review-form-lecturer"
                        placeholder = "Lecturer's Name:"
                        ref = {input =>(this._lecturer = input)}
                    />{" "}
                </div>
                <div className="review-form-fields-review">
                    <textarea className="review-form-review"
                        placeholder = "Write your review:"
                        ref = {textarea =>(this._review = textarea)}
                    />
                </div>
                <div className="review-form-actions">
                    <button className= "review-form-submit" type="submit">Post Review</button>
                </div>
            </form>
        )
    }

    _handleSubmit(event) {
        event.preventDefault();
        let userName = this._userName;
        let reviewLikes = 0;
        let reviewDislikes = 0;
        let reviewDate = "21/04/2021";
        let reviewRating = this._rating;
        let reviewDateCompleted = this._dateCompleted;
        let reviewLecturer = this._lecturer;
        let reviewText = this._review;

        this.props.addReview(userName.value, reviewLikes.value, reviewDislikes.value, reviewDate.value, reviewRating.value, reviewDateCompleted.value, reviewLecturer.value, reviewText.value)
    }
}


class ReviewBox extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: [
                {
                    reviewID: 1,
                    reviewLikes: 4873,
                    reviewDislikes: 59,
                    userName: "Martin Le",
                    courseCode: "SENG2011",
                    reviewDate: "20/4/2021",
                    reviewRating: 4.5,
                    reviewDateCompleted: "Term 1 2021",
                    reviewLecturer: "Fethi Rabhi",
                    reviewText: "This course gives you an introduction of how to work with a tech stack to create Web Applications with the use of APIs. I personally enjoyed this course as it helped me develop my Front-End development skills. If you are not found of group work, i wouldn't recommend this course, as it heavily relies on groupwork. Overall this course is very fun!",
                }, 
                {
                    reviewID: 2,
                    reviewLikes: 64,
                    reviewDislikes: 2053,
                    userName: "Jacob Page",
                    courseCode: "SENG2011",
                    reviewDate: "20/4/2020",
                    reviewRating: 1.0,
                    reviewDateCompleted: "Term 1 2020",
                    reviewLecturer: "Fethi Rabhi",
                    reviewText: "Worst course in UNSW. Steer clear away!"
                }
            ]
        };
    }

    _getReviews() {
        return this.state.reviews.map(review => {
            return (
                <ReviewTemplate
                    userName={review.userName}
                    reviewLikes = {review.reviewLikes}
                    reviewDislikes = {review.reviewDislikes}
                    reviewDate = {review.reviewDate}
                    reviewRating = {review.reviewRating}
                    reviewDateCompleted = {review.reviewDateCompleted}
                    reviewLecturer = {review.reviewLecturer}
                    reviewText = {review.reviewText}
                    key={review.reviewID}
                />
            );
        });
    }

    render() {
        const reviews = this._getReviews();
        let reviewNodes;
        reviewNodes = (
            <div className = "reviewList">
                {reviews}
            </div>
        );
        return (
            <div className="review-box container">
                <ReviewForm addReview={this._addReview.bind(this)} />
                {reviewNodes}
            </div>
        );
    }

    _addReview(userName, reviewLikes, reviewDislikes, reviewDate, reviewRating, reviewDateCompleted, reviewLecturer, reviewText) {
        const review = {
            reviewID: this.state.reviews.length + 1,
            userName,
            reviewLikes: 0,
            reviewDislikes: 0, 
            reviewDate: "21/04/2021",
            reviewRating, 
            reviewDateCompleted,
            reviewLecturer,
            reviewText
        };
        this.setState({reviews: this.state.reviews.concat([review]) });
    }
}

export default reviewPageTemplate;