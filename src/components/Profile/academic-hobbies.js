import './academic-hobbies.css'

function AcademicHobbies (props){
    return(
        <div className="academic-hobbies">
            <div className="user-hobbies-title">
                <strong>Hobbies</strong>
            </div>
            <div className="user-hobbies">
                {props.hobbies}
            </div>
        </div>
    )
}
export default AcademicHobbies;