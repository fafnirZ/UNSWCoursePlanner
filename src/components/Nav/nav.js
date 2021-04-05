import react, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import './nav.css'

function Navbar(props) {

	/*
		navbar becomes sticky after it reaches the offset of 112?
		-> it will stick to the top of the page

	*/

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
	//adds an event listener which handles scrolling and setting scrolled
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
					<Button href="/studyspacefinder" variant="contained">
						Study space finder
					</Button>
				</li>
				<li className="logout">
					<Button href="/" variant="contained">
						Logout
					</Button>
				</li>
				<li className="profile">
					<img src="profile.png"/>
				</li>

			</ul>
		</nav>
	);

}

export default Navbar;