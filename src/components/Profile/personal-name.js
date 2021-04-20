import react from 'react'
import axios from 'axios'
import './personal-name.css'
import EditProfile from './personal-details-edit.js'
import { SubmitConsumer } from '../../helpers/submitContext.js'

function NamePic (props) {



    return (
            <div className="NamePic">
                <div className="profilePic">
                    <img src='./profile.png'></img>
                </div>
                <div className="profileName">
                    <strong className="NAME">{props.name}</strong>
                    <EditProfile 
                    name={props.name} 
                    year={props.year}
                    email={props.mail}
                    degree={props.degree}
                    gender={props.gender}
                    about={props.about}
                    hobbies={props.hobbies}
                    />
                </div>

            </div>
    )
}

export default NamePic;