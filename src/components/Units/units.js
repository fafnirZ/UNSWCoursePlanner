import react from 'react'
import './units.css'


function Units(props) {


	return (

		<div className="uContainer">
			<li className="Rows">
				<div>Discipline</div>
				<div>0 UOC </div>
			</li>

			<li className="Rows">
				<div>General Education</div>
				<div>0 UOC </div>			
			</li>

			<li className="Rows">
				<div>Optional Minors</div>
				<div>0 UOC </div>
			</li>
		</div>
	);

}

export default Units;