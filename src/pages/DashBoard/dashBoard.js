import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import Table from '../../components/Table/table.js'
import Units from '../../components/Units/units.js'
import Tree from '../../components/Tree/tree.js'
import SearchBar from '../../components/Search/search.js'
import Years from '../../components/Years/years.js'
import Tags from '../../components/Tags/tags.js'
import './dashBoard.css'

function DashBoard(props) {


	return (
		<div className="Dashboard">
			<div className="Header">
				<Navbar />
			</div>
			<div className="Body">
				<div className="tags">
					<Tags />
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
					<Years />
				</div>

			</div>
			<div className="Footer">
				smelly footer
			</div>
		</div>
	);
}

export default DashBoard;