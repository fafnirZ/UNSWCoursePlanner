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
		currentCoreUOC: 0,
	    electiveUOC: 42,
		currentElectiveUOC: 0,
	    higherUOC:30,
		currentHigherUOC: 0,
	    coreCourses: {
	        "lvlOne":["COMP1511", "COMP1521", "COMP1531", "MATH1081", "ENGG1000", "MATH1131", "MATH1231"],
	        "lvlTwo": ["COMP2041", "COMP2511", "COMP2521", "DESN2000", "MATH2400", "MATH2859", "SENG2011", "SENG2021"],
	        "lvlThree": ["SENG3011", "COMP3311", "COMP3141", "COMP3331"],
	        "lvlFour": ["COMP4920", "COMP4951", "COMP4952", "COMP4953"]
		}
	});

	react.useEffect(()=> {
		//console.log(window.localStorage.getItem('credit'))
		
		if(window.localStorage.getItem('uoc') !== null) {
			setData({...data, coreUOC: window.localStorage.getItem('uoc'), currentCoreUOC: window.localStorage.getItem('currentUOC')})
		}
		
	},[])



	const handleChange = (newYears) => {
		setYears(newYears);

	}

	const handleCreditChange= (newData)=> {
		setData(newData)
		//newData['coreUOC']
		window.localStorage.setItem('uoc', newData['coreUOC'])

	}
	const handleCourseChange = (newBar) => {
		setData(newBar)
		window.localStorage.setItem('currentUOC', newBar['currentCoreUOC'])
	}







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
					<Tree value={years} onChange={handleCourseChange} credit={data}/>
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