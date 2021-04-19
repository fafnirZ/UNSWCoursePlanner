import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/menu';
import MenuItem from '@material-ui/core/menu';


import React from 'react';


export default class extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			email: "",
			degree: "",
			year: "",
			gender: "",
			about: "",
			hobbies: ""

		}
		this.handleChange = this.handleChange.bind(this);
	}


    handleClickOpen = (e) => {
    	this.setState({open: true})
  	};

	handleDialogClose = (e) => {
    	this.setState({open: false})
	};

	handleDialogSubmit = (e) => {
    	this.setState({open: false})

	}
	handleChange = (e) => {
		e.persist();
		console.log(e.target.attributes.value)
		this.setState(state=> {
			state.email = e.target.attributes.value
		})
	}

	render(){
		return(
			[<button onClick={this.handleClickOpen}>
				edit profile
			</button>,
			<Dialog open={this.state.open} onClose={this.handleDialogClose} aria-labelledby="form-dialog-title">
	            <DialogTitle id="form-dialog-title">
	                <strong>Edit profile</strong>
	            </DialogTitle>
	            <DialogContent>
		                 <TextField
		                    autoFocus
		                    margin="dense"
		                    value={this.state.email}
		                    label="email"
		                    type="email"
		                    variant="outlined"
		                    fullWidth
		                    onChange={this.handleChange}
		                />
		                 <TextField
		                    autoFocus
		                    margin="dense"
		                    label="Degree"
		                    type="degree"
		                    value={this.state.degree}
		                    variant="outlined"
		                    fullWidth
		                />
		                 <TextField
		                    autoFocus
		                    margin="dense"

		                    label="year"
		                    type="year"
		                    value={this.state.year}
		                    variant="outlined"
		                />
		                 <TextField
		                    autoFocus
		                    margin="dense"

		                    label="Gender"
		                    type="gender"
		                    value={this.state.gender}
		                    variant="outlined"
		                />

		                <TextField
		                    autoFocus
		                    margin="dense"
							value={this.state.about}
		                    label="About me"
		                    type="about"
		                    variant="outlined"
		                    fullWidth
		                    multiline	
		                    rows={3}
		                /> 
		                <TextField
		                	value={this.state.hobbies}
		                    aria-label="empty textarea" 
		                    placeholder="hobbies" 
		                    type="hobbies"
		                    fullWidth 
		                    multiline
		                    rows={5}
		                    variant="outlined"
		                
		                />
	            </DialogContent>
	            <DialogActions>
	                <Button onClick={this.handleDialogClose} color="primary">
	                     Cancel
	                </Button>
	                <Button onClick={this.handleDialogSubmit} color="primary">
	                    Submit
	                </Button>
	            </DialogActions>
	        </Dialog>]
	);
	
	}
	
};
