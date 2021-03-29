import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import Course from '../../components/Course/course.js'
import Overview from '../../components/Overview/overview.js'
import './reviewPage.css'

function ReviewPage(props) {
    return (
        <div className="ReviewPage">
            <div className="Header">
                <Navbar />
            </div>
            <div className="Body">
                <div className="course">
                    <Course />
                </div>
                <div className="overview">
                    <Overview />
                </div>
                <div className="review"></div>
            </div>
            <div className="Footer">
                test
            </div>
        </div>
    );
}

export default ReviewPage;