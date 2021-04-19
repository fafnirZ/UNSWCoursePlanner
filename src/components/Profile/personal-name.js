import react from 'react'
import './personal-name.css'
import EditProfile from './personal-details-edit.js'

function NamePic () {
    return (
        <div className="NamePic">
            <div className="profilePic">
                <img src='./profile.png'></img>
            </div>
            <div className="profileName">
                <strong className="NAME">Martin Le</strong>
                <EditProfile/>
            </div>

        </div>
    )
}

export default NamePic;