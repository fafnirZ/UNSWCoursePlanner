import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import Course from '../../components/Course/course.js'
import Overview from '../../components/Overview/overview.js'
import Review from '../../components/Review/review.js'
import OurButton from '../../components/Button/button.js'
import './reviewPage.css'

function ReviewPage(props) {
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
                test
            </div>
        </div>
    );
}

export default ReviewPage;