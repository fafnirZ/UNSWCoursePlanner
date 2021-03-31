import react, {useState} from 'react';
import Modal from 'react-modal'
import './course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Course (props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
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
        <div className="buttons">
            <button className="addTimetable">Add to Timetable</button>
            <button className="addReview" onClick={() => setModalIsOpen(true)}>
                Add a Review
            </button>
            <Modal isOpen={modalIsOpen}>
                <div className="reviewHeader">
                    <button className="close" onClick={() => setModalIsOpen(false)}>
                        <FontAwesomeIcon icon = "times"/>
                    </button>
                    <div className="titleHeader">
                        Create a Review
                    </div>
                </div>
                <div className="modalBody">
                    <div className="formRating">
                        <div className="ratingPrompt">
                            Course Rating:
                        </div>
                    </div>
                </div>
                <h2>hi</h2>
            </Modal>
        </div>

    </div>
    );
}

export default Course;

