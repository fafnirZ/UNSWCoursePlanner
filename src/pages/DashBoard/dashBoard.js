import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import './dashBoard.css'

function DashBoard(props) {


	return (
		<div className="Dashboard">
			<div className="Header">
				<Navbar />
			</div>
			<div className="Body">
				this is for body
			</div>
			<div className="Footer">
				smelly footer
			</div>
		</div>
	);
}

export default DashBoard;