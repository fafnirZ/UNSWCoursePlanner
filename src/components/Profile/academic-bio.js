import './academic-bio.css'

function Bio(props) {
    return(
        <div className="academic-bio">
            <div className="user-bio-title"><strong>About Me</strong></div>
            <div className="user-bio">
                {props.about}
            </div>
        </div>
    )
}
export default Bio;