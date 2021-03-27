import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import Table from '../../components/Table/table.js'
import './dashBoard.css'

function DashBoard(props) {


	return (
		<div className="Dashboard">
			<div className="Header">
				<Navbar />
			</div>
			<div className="Body">
				<div className="tags">
				</div>

				<div className="units">
				</div>

				<div className="search">
				</div>

				<div className="tree">
				</div>

				<div className="table">
					<Table />
				</div>

				<div className="years">
				</div>

			</div>
			<div className="Footer">
				smelly footer
			</div>
		</div>
	);
}

export default DashBoard;