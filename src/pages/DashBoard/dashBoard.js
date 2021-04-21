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



	const [data, setData] = react.useState({
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
	});

	const handleChange = (newYears) => {
		setYears(newYears);

	}

	const handleCreditChange= (newData)=> {
		console.log(newData)
		setData(newData)
	}
	/*
	const handleCourseChange = (newData) => {
		console.log(0)
		setData(6)
	}
	*/






	return (
		<div className="Dashboard">
			<div className="dHeader">
				<Navbar contains={buttons}/>
			</div>
			<div className="dBody">
				<div className="tags">
					<Tags />
				</div>

				<div className="units" data={data}>
					<Units data={data}/>
				</div>

				<div className="search">
					<SearchBar />
				</div>

				<div className="tree">
					<Tree />
				</div>
				<div className="table">
					<Table years={years} onChange={handleCreditChange} credit={data}/>
				</div>

				<div className="years">
					<Years value={years} onChange={handleChange} />
				</div>

			</div>
    
			<div className="dFooter">
			</div>
		</div>
	);
}

export default DashBoard;