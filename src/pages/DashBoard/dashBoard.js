import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import Table from '../../components/Table/table.js'
import Units from '../../components/Units/units.js'
import Tree from '../../components/Tree/tree.js'
import OurButton from '../../components/Button/button.js'
import SearchBar from '../../components/Search/search.js'
import Years from '../../components/Years/years.js'
import Tags from '../../components/Tags/tags.js'
import './dashBoard.css'

function DashBoard(props) {

	const buttons = () => {
		return [
			<OurButton name="Study Space Finder"href="/studyspacefinder"/>,
		]
	}
	const[years, setYears] = react.useState(4);

	const handleChange = (newYears) => {
		setYears(newYears);
	}

	react.useEffect(()=> {
		
	})


	return (
		<div className="Dashboard">
			<div className="dHeader">
				<Navbar contains={buttons}/>
			</div>
			<div className="dBody">
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
					<Table years={years} />
				</div>

				<div className="years">
					<Years value={years} onChange={handleChange}/>
				</div>

			</div>
    
			<div className="dFooter">
			</div>
		</div>
	);
}

export default DashBoard;