import react, {useEffect} from 'react'
import Navbar from '../../components/Nav/nav.js'
import OurButton from '../../components/Button/button.js'
import SimpleMap from '../../components/Maps/maps.js'
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
				<SimpleMap />
			</div>

		</div>
	);
}

export default StudySpaceFinder;