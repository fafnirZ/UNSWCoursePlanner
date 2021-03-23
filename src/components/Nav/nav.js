import react, {useEffect} from 'react'

import './nav.css'

function Navbar(props) {



	return (
		<nav id='navbar' className="Nav">

			<div>
				<img src="unswlogo.png" className="logo" alt=""/>
			</div>
			<ul className="menu">
				<li>
					<button>
						study space finder
					</button>
				</li>
				<li>
					<button>
						logout
					</button>
				</li>
				<li>
					<button>
						profile picture
					</button>
				</li>

			</ul>
		</nav>
	);

}

export default Navbar;