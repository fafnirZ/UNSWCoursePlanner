import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import NamePic from '../../components/Profile/personal-name.js'
import PersonalDetails from '../../components/Profile/personal-details.js'
import Bio from '../../components/Profile/academic-bio.js'
import AcademicCourse from '../../components/Profile/academic-course.js'
import AcademicHobbies from '../../components/Profile/academic-hobbies.js'
import OurButton from '../../components/Button/button.js'
import './profilePage.css';

function ProfilePage(props) {
    const buttons = () => {
        return [
            <OurButton name="Home"href="/dashboard"/>,
        ]
    }
    return (
        <div className="ProfilePage">
            <div className="Header">
                <Navbar contains={buttons}/>
            </div>
            <div className="ProfileBody">
                <div className="PersonalArea">
                    <div><NamePic /></div>
                    <div><PersonalDetails/></div>
                </div>
                <div className="AcademicArea">
                    <Bio />
                    <AcademicCourse />
                    <AcademicHobbies />
                </div>
            </div>
            <div className="Footer">
            </div>
        </div>
    );
}

export default ProfilePage;