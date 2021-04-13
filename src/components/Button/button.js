import react from 'react';
import './button.css'
import Button from '@material-ui/core/Button'

function OurButton(props) {

	return (
		<Button href={props.href} onClick = {props.onClick} variant="contained">
			{props.name}
		</Button>
	);

};

export default OurButton;