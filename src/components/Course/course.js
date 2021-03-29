import react, {useEffect} from 'react';
import './course.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
//import { faStarEmpty } from '@fortawesome/free-regular-svg-icons/faStar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faStar);

function Course (props) {
    return (
    <div className="Course">
        <div className="courseName">
            <p>Requirements and Design Workshop</p>
        </div>
        <div className="code">
            <p>SENG2021 | 6 Units of Credit</p>
        </div>
        <span className="rating">
            <FontAwesomeIcon icon="faStar" />
            <p>*****</p>
        </span>
        <div className="numOfReviews">
            <p> 4.0 average rating based on 200 reviews</p>
        </div>
    </div>
    );
}

export default Course;