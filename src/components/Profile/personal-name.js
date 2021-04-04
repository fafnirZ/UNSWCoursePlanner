import react from 'react'

function NamePic () {
    return (
        <div className="NamePic">
            <div className="profilePic">
                <img src='./profile.png'></img>
            </div>
            <div className="profileName">
                <strong>Martin Le</strong>
            </div>
        </div>
    )
}

export default NamePic;