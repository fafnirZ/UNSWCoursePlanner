import react from 'react'
import './units.css'
var data = {
	dCode: 3707,
    dName: "Engineering (Honours)",
    dSpecialisation: "SENGAH",
    coreUOC: 126,
    electiveUOC: 42,
    higherUOC:30,
    coreCourses: {
        "lvlOne":["COMP1511", "COMP1521", "COMP1531", "MATH1081", "ENGG1000", "MATH1131", "MATH1231"],
        "lvlTwo": ["COMP2041", "COMP2511", "COMP2521", "DESN2000", "MATH2400", "MATH2859", "SENG2011", "SENG2021"],
        "lvlThree": ["SENG3011", "COMP3311", "COMP3141", "COMP3331"],
        "lvlFour": ["COMP4920", "COMP4951", "COMP4952", "COMP4953"]
	}
};

function Units(props) {

	return (

		<div className="uContainer">
			<li className="Rows">
				<div>Core Courses</div>
				<div>{data["coreUOC"]} UOC </div>
			</li>

			<li className="Rows">
				<div>Electives</div>
				<div>{data["electiveUOC"]} UOC </div>			
			</li>

			<li className="Rows">
				<div>Level 4 or Higher Electives</div>
				<div>{data["higherUOC"]} UOC </div>
			</li>
		</div>
	);

}

export default Units;