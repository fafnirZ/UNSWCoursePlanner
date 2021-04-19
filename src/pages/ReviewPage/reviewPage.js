import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
//import Course from '../../components/Course/course.js'
//import Overview from '../../components/Overview/overview.js'
import Review from '../../components/Review/review.js'
import OurButton from '../../components/Button/button.js'
import test from './reviewPageTemplate.js'
import {Link, Switch, Route} from 'react-router-dom';
import courseList from '../../data/oldCourseList.json'
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

const ReviewPage = () => {
    const buttons = () => {
        return [
            <OurButton name="Home"href="/dashboard"/>
        ]
    }        
        return (
            <div className="ReviewPage">
            <div className="Header">
                <Navbar contains={buttons}/>
            </div>
            <div className="ReviewBody">
                <h1>Page Not Found :(</h1>
                <h3>The page you are looking for doesn't exist.</h3>
            </div>
            <div className="Footer">
            </div>
            <Switch>
                <Route path="/reviewpage/:courseCode" component = {test}/>
            </Switch>
        </div>

    );
};

export default ReviewPage;