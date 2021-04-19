import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import Course from '../../components/Course/course.js'
import Overview from '../../components/Overview/overview.js'
import Review from '../../components/Review/review.js'
import OurButton from '../../components/Button/button.js'
import test from './reviewPageTemplate.js'
import {Link, Switch, Route} from 'react-router-dom';
import courseList from '../../data/oldCourseList.json'
import './reviewPage.css'

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