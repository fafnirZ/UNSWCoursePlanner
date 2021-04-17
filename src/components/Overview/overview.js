import './overview.css'
import courses from "../../data/courseList.json"
const testCourse = courses.MATH1131
const description = testCourse.c_description.replace(/(<([^>]+)>)/gi, "")
console.log(testCourse)

function Overview (props) {

    return (
        <div className="overview_content">
            <h1>Overview</h1>
            <div>{
                <p>{description}</p>
            }</div>
        </div>

    );
}



export default Overview;