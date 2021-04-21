import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import NamePic from '../../components/Profile/personal-name.js'
import PersonalDetails from '../../components/Profile/personal-details.js'
import Bio from '../../components/Profile/academic-bio.js'
import AcademicCourse from '../../components/Profile/academic-course.js'
import AcademicHobbies from '../../components/Profile/academic-hobbies.js'
import OurButton from '../../components/Button/button.js'
import axios from 'axios';
import './profilePage.css';
import { SubmitProvider, SubmitConsumer } from '../../helpers/submitContext.js'

function ProfilePage(props) {
    const buttons = () => {
        return [
            <OurButton name="Home"href="/dashboard"/>,
        ]
    }

    const [name, setName] = react.useState('');
    const [year, setYear] = react.useState(-1);
    const [email, setEmail] = react.useState('');
    const [degree, setDegree] = react.useState('');
    const [gender, setGender] = react.useState('');
    const [about, setAbout] = react.useState('');
    const [hobbies, setHobbies] = react.useState('');


    const facebookID = window.localStorage.getItem('facebookId');

    const [submit, setSubmit] = react.useState(false);



    react.useEffect(()=> {
        axios.get(`http://localhost:8080/getProfile?facebookId=${facebookID}`)
        .then(response=> {
            setName(response.data.data.name)
            //if there isnt any of the data yet just initialise it as default aka empty
            response.data.data.year===undefined? setYear(-1): setYear(response.data.data.year);
            response.data.data.email===undefined? setEmail(""): setEmail(response.data.data.email);
            response.data.data.degree===undefined? setDegree(""): setDegree(response.data.data.degree);
            response.data.data.gender===undefined? setGender(""): setGender(response.data.data.gender);
            response.data.data.about===undefined? setAbout(""): setAbout(response.data.data.about);
            response.data.data.hobbies===undefined? setHobbies(""):setHobbies(response.data.data.hobbies);
        })
    },)



    return (
        <SubmitProvider value={{submit, setSubmit}}>

            <div className="ProfilePage">
                <div className="Header">
                    <Navbar contains={buttons}/>
                </div>
                <div className="ProfileBody">
                    <div className="PersonalArea">
                        <div>
                            <NamePic                 
                            name={name} 
                            year={year}
                            email={email}
                            degree={degree}
                            gender={gender}
                            about={about}
                            hobbies={hobbies}
                            />
                        </div>
                        <div>
                            <PersonalDetails
                            name={name} 
                            year={year}
                            email={email}
                            degree={degree}
                            gender={gender}
                            />
                        </div>
                    </div>
                    <div className="AcademicArea">
                        <Bio about={about}/>
                        <AcademicCourse />
                        <AcademicHobbies hobbies={hobbies}/>
                    </div>
                </div>
            </div>

        </SubmitProvider>
    );
}

export default ProfilePage;