import react, {useEffect} from 'react'

import './nav.css'

function Navbar(props) {

	return (
		<nav id='navbar' className="Nav">
			<div className="logo">
				<img src="unswlogo.png"/>
			</div>
			<ul className="menu">
				<li className="studySpace">
					<button >
						study space finder
					</button>
				</li>
				<li className="logout">
					<button >
						logout
					</button>
				</li>
				<li className="profile">
					<button>
						profile picture
					</button>
				</li>

			</ul>
		</nav>
	);

}

export default Navbar;