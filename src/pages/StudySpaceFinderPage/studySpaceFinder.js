import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import './studySpaceFinder.css'

function StudySpaceFinder(props) {

	return (
		<div className="StudyFinder">
			<div className="Header">
				<Navbar />
			</div>

			<div className="studyspaceBody">
				<img src="studyspacemap.png"/>
			</div>

			<div className="Footer">
			</div>
		</div>
	);
}

export default StudySpaceFinder;