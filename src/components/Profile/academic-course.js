import '../../components/Profile/academic-course.css'

function AcademicCourse(props) {
    return(
        <div className="academic-course">
            <div className="current-course">
                <strong className="course-title">Current Courses</strong>
                <div className="current-course-list">
                    <li>COMP2041: Software Construction: Techniques and Tools</li>
                    <li>SENG2021: Requirements and Design Workshop</li>
                    <li>PHSL2121: Principles of Physiology 1A</li>
                </div>
            </div>
            <div className="completed-course">
                <strong className="course-title">Completed Courses</strong>
                <div className="completed-course-list">
                    <li>COMP1511</li>
                    <li>COMP1521</li>
                    <li>COMP2511</li>
                    <li>COMP2521</li>
                    <li>COMP3311</li>
                    <li>MATH1041</li>
                    <li>MATH1081</li>
                    <li>MATH1131</li>
                    <li>MATH1231</li>
                    <li>ENGG1000</li>
                    

                </div>
            </div>
        </div>
    )
}
export default AcademicCourse;