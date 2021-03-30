import react, {useEffect} from 'react';
import './course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Course (props) {
    return (
    <div className="Course">
        <div className="text">
            <div className="courseName">
                <p>Requirements and Design Workshop</p>
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
        <div className="buttons">
            <button className="addTimetable">Add to Timetable</button>
            <button className="addReview">Add a Review</button>
        </div>

    </div>
    );
}

export default Course;