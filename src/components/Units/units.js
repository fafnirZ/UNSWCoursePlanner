import react from 'react'
import './units.css'


function Units(props) {

	return (

		<div className="uContainer">
			<li className="Rows">
				<div>Core Courses</div>
				<div>{props.data["coreUOC"]} UOC </div>
			</li>

			<li className="Rows">
				<div>Electives</div>
				<div>{props.data["electiveUOC"]} UOC </div>			
			</li>

			<li className="Rows">
				<div>Level 4 or Higher Electives</div>
				<div>{props.data["higherUOC"]} UOC </div>
			</li>
		</div>
	);

}

export default Units;