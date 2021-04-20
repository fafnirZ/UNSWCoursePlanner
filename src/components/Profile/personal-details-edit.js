import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/menu';
import MenuItem from '@material-ui/core/menu';
import axios from 'axios'

import React from 'react';


export default class extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			data: {
				name: this.props.name,
				email: this.props.email,
				degree: this.props.degree,
				year: this.props.year,
				gender: this.props.gender,
				about: this.props.about,
				hobbies: this.props.hobbies
			}


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

    	console.log(this.state)
    	
		axios.headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type" : "application/json"
        }
        axios.post('http://localhost:8080/editProfile', {
            data: {
            	facebookId: window.localStorage.getItem('facebookId'),
                data : this.state.data
            }
        })
		
	}
	/*
	handles update of dialog items
	*/
	handleChange = (e) => {
		e.persist();
		//console.log(e.currentTarget.attributes.value)
		//const type = e.currentTarget.attributes.type.value
		//console.log(e.currentTarget.attributes)


		if(e.currentTarget.attributes.rows !== undefined) {
			//console.log(e.currentTarget.attributes.placeholder.value)
			this.setState({data: {...this.state.data, 
				[e.currentTarget.attributes.placeholder.value]: e.target.value}
			})
		}
		else {
			this.setState(state=> {
				let neww = state.data
				neww[e.target.attributes.type.value] = e.target.value
				return neww
			})

		}
		

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
		                    variant="outlined"
		                    fullWidth
		                    onChange={this.handleChange}
		                />
		                 <TextField
		                    autoFocus
		                    margin="dense"
		                    label="year"
		                    type="year"
		                    variant="outlined"
		                    onChange={this.handleChange}
		                />
		                 <TextField
		                    autoFocus
		                    margin="dense"
		                    label="Gender"
		                    type="gender"
		                    variant="outlined"
		                    onChange={this.handleChange}
		                />

		                <TextField
		                    autoFocus
		                    margin="dense"
		                    label="About me"
		                    placeholder="about"
		                    //type="about"
		                    variant="outlined"
		                    fullWidth
		                    multiline	
		                    rows={3}
		                    onChange={this.handleChange}
		                /> 
		                <TextField
		                    aria-label="empty textarea" 
		                    placeholder="hobbies" 
		                    label="Hobbies"
		                    //type="hobbies"
		                    fullWidth 
		                    multiline
		                    rows={5}
		                    variant="outlined"
		                    onChange={this.handleChange}
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
