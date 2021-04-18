import react from 'react'
import './years.css'

function Years(props) {

	const plus = ()=> {
		props.onChange(props.value+1)
	}
	const minus = ()=> {
		props.onChange(props.value-1)
	}

	return (
		<div className="yContainer">
			<li className="Years">
				<div><img src="plussign.png" onClick={plus}/></div>
				<div><img src="minussign.png" onClick={minus}/> </div>
			</li>
		</div>
	);

}

export default Years;