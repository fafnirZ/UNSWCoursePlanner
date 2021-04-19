import React, {useEffect} from 'react'
import courses from '../../data/oldCourseList.json'
import Navbar from '../../components/Nav/nav.js'
import Review from '../../components/Review/review.js'
import OurButton from '../../components/Button/button.js'
import Form from '../../components/Form/form.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../components/Course/course.css';
import '../../components/Overview/overview.css'

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
                        <div className="buttons" >
                            <div className="addTimetable">
                                <button className="addTimetableButton">
                                    Add to Timetable
                                </button>
                            </div>
                            <div className="addReview">
                                <Form />    
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
                    <Review />
                </div>
            </div>
            <div className="Footer">
            </div>
    </div>
    )
};

export default reviewPageTemplate;