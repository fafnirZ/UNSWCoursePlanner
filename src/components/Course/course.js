import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './course.css';
import Form from '../../components/Form/form.js';

function Course (props) {

    return (
        <div className="Course">
            <div className="text">
                <div className="courseName">
                    <strong>Requirements and Design Workshop</strong>
                </div>
                <div className="code">
                    <p>SENG2021 | 6 Units of Credit</p>
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
    );
}

export default Course;

