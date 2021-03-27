import react, {useEffect} from 'react'

import './nav.css'

function Navbar(props) {
	const [scrolled, setScrolled] = react.useState(false);
	const [scrollY, setScrollY] = react.useState(window.scrollY);

	const handleScroll = () => {
		const offset = window.scrollY;
		setScrollY(offset);
		//7rem = 112 px
		if(offset > 112) {
			setScrolled(true);
		}
		else {
			setScrolled(false);
		}
	}

	//initialise on mount
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	let navbarClasses = ['Nav'];
	//whenever scroll changes
	if(scrolled) {
		navbarClasses.push('sticky')
	
	};

	return (
		<nav id='navbar' className={navbarClasses.join(" ")}>
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
					<img src="profile.png"/>
				</li>

			</ul>
		</nav>
	);

}

export default Navbar;