import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import Course from '../../components/Course/course.js'
import Overview from '../../components/Overview/overview.js'
import Review from '../../components/Review/review.js'
import OurButton from '../../components/Button/button.js'
import courses from "../../data/courseList.json"
import './reviewPage.css'

function ReviewPage(props) {
    /** 
    const CourseList = () => {
        const courseMapped = courses.map(course => <Link key={i} to = {`/reviewpage/${courses.ACTL4002}`}>{}</Link>) 
    }
    */
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
                    <Course />
                </div>
                <div className="overview">
                    <Overview />
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