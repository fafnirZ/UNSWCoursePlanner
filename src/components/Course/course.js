import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './course.css';
import Form from '../../components/Form/form.js';
import Button from '@material-ui/core/Button'

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
                    <Button className="addTimetableButton" variant="outlined" color="inherit">
                        Add to Timetable
                    </Button>
                </div>
                <div className="addReview">
                    <Form />    
                </div>
            </div>
        </div>
    );
}

export default Course;

