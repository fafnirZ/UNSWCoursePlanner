import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import './profilePage.css';

function ProfilePage(props) {
    return (
        <div className="ProfilePage">
            <div className="Header">
                <Navbar />
            </div>
            <div className="Body">
                <div className="profilePic"></div>
                <div className="genInfo"></div>
                <div className="bio"></div>
                <div className="currentCourses"></div>
                <div className="completedCourses"></div>
                <div className="hobbies"></div>
            </div>
            <div className="Footer">
                test
            </div>
        </div>
    );
}

export default ProfilePage;