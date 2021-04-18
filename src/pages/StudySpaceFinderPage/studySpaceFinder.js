import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import OurButton from '../../components/Button/button.js'
import './studySpaceFinder.css'

function StudySpaceFinder(props) {
	const buttons = () => {
		return [
			<OurButton name="Home"href="/dashboard"/>,
		]
	}
	return (
		<div className="StudyFinder">
			<div className="Header">
				<Navbar contains={buttons}/>
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