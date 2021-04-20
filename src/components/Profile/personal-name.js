import react from 'react'
import axios from 'axios'
import './personal-name.css'
import EditProfile from './personal-details-edit.js'

function NamePic () {

    const [name, setName] = react.useState('');
    const [year, setYear] = react.useState(-1);
    const [email, setEmail] = react.useState('');
    const [degree, setDegree] = react.useState('');
    const [gender, setGender] = react.useState('');
    const [about, setAbout] = react.useState('');
    const [hobbies, setHobbies] = react.useState('');




    const facebookID = window.localStorage.getItem('facebookId');

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
    }, [name])



    return (
        <div className="NamePic">
            <div className="profilePic">
                <img src='./profile.png'></img>
            </div>
            <div className="profileName">
                <strong className="NAME">{name}</strong>
                <EditProfile 
                name={name} 
                year={year}
                email={email}
                degree={degree}
                gender={gender}
                about={about}
                hobbies={hobbies}
                />
            </div>

        </div>
    )
}

export default NamePic;