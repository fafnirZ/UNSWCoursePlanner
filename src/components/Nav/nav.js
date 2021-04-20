import react, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import OurButton from '../Button/button.js'
import { accountService } from '../../services/account_services.js'

import './nav.css'

function Navbar(props) {

	/*
		navbar becomes sticky after it reaches the offset of 112?
		-> it will stick to the top of the page

	*/

	const [scrolled, setScrolled] = react.useState(false);
	

	const handleScroll = () => {
		const offset = window.scrollY;
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


	const buttons = props.contains();



	return (
		<nav id='navbar' className={navbarClasses.join(" ")}>
			<div className="logo">
				<img src="unswlogo.png"/>
			</div>
			<ul className="menu">
				<li className="buttonsContainer">
				{buttons.map((item,index) => {
					return (
						<li >
							{item}
						</li>
					)
				})}
				</li>
				<li className="logout">
					<OurButton name="Logout" onClick={accountService.logout}/>
				</li>
				<a className="profile" href="/profile">
					<img src="profile.png" />
				</a>

			</ul>
		</nav>
	);

}

export default Navbar;