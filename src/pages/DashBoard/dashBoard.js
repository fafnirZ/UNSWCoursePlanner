import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import Table from '../../components/Table/table.js'
import Units from '../../components/Units/units.js'
import Tree from '../../components/Tree/tree.js'
import SearchBar from '../../components/Search/search.js'
import './dashBoard.css'

function DashBoard(props) {


	return (
		<div className="Dashboard">
			<div className="dHeader">
				<Navbar />
			</div>
			<div className="dBody">
				<div className="tags">
				</div>

				<div className="units">
					<Units />
				</div>

				<div className="search">
					<SearchBar />
				</div>

				<div className="tree">
					<Tree />
				</div>

				<div className="table">
					<Table />
				</div>

				<div className="years">
				</div>

			</div>
			<div className="dFooter">
				smelly footer
			</div>
		</div>
	);
}

export default DashBoard;