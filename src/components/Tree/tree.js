import react from 'react'
//import ProgressBar from 'react-bootstrap/ProgressBar'
import ProgressBar from '@ramonak/react-progress-bar'
import './tree.css'

function Tree(props) {


	return (
		<div className="Container">
			<div className = "dTitle">
				<strong>Degree Progress</strong>
			</div>
			<div className="core">
				<div className = "coreTitle"><strong>Core Course Progress:</strong></div>
				<div className = "coreGraph">
					<ProgressBar completed={0} bgColor="#ca3583" />
				</div>
			</div>
			<div className="elective">
				<div className = "electiveTitle"><strong>Elective Course Progress:</strong></div>
				<div className = "electiveGraph">
					<ProgressBar completed={0} bgColor="#52cd32" />
				</div>
			</div>
			<div className="higher">
				<div className = "higherTitle"><strong>Level 4+ Courses Progress:</strong></div>
				<div className = "higherGraph">
					<ProgressBar completed={0} bgColor="#449bbb" />
				</div>
			</div>
		</div>
	);

}

export default Tree;