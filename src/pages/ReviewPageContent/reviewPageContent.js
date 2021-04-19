import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
//import Course from '../../components/Course/course.js'
//import Overview from '../../components/Overview/overview.js'
import Review from '../../components/Review/review.js'
import OurButton from '../../components/Button/button.js'
import oldCourses from "../../data/oldCourseList.json"
import courses from "../../data/courseList.json"
import {Link, Route, Switch} from 'react-router-dom';
import './reviewPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../components/Course/course.css';
import '../../components/Overview/overview.css';
import Form from '../../components/Form/form.js';


const testCourse = courses.MATH1131
const courseCode = testCourse.c_code
const courseName = testCourse.c_title
const courseCred = testCourse.c_uoc
const courseDesc = testCourse.c_description.replace(/(<([^>]+)>)/gi, "")

function ReviewPageContent(props) {
    //const coursesMapped = courses.map(courseCodes => <Link key={courses.c_code} to={`/reviewpage/${courses.c_code}`}></Link> )
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
                    <div className = "r_course">
                        <div className="r_text">
                            <div className="r_courseName">
                                <strong>{courseName}</strong>
                            </div>
                            <div className="r_code">
                                <p>{courseCode} | {courseCred} Units of Credit</p>
                            </div>
                            <span className="r_rating">
                            <FontAwesomeIcon icon = "star"/>
                            <FontAwesomeIcon icon = "star"/>
                            <FontAwesomeIcon icon = "star"/>
                            <FontAwesomeIcon icon = "star"/>
                            </span>
                            <div className="r_numOfReviews">
                                <p> 4.0 average rating based on 200 reviews</p>
                            </div>
                        </div>
                        <div className="r_buttons" >
                            <div className="r_addTimetable">
                                <button className="r_addTimetableButton">
                                    Add to Timetable
                                </button>
                            </div>
                            <div className="r_addReview">
                                <Form />    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overview">
                    <div className="overview_content">
                        <h1>Overview</h1>
                    <div>{
                        <p>{courseDesc}</p>
                    }</div>
            </div>
                </div>
                <div className="review">
                    <Review />
                </div>
            </div>
            <div className="Footer">
            </div>
        </div>
    );
}

export default ReviewPage;