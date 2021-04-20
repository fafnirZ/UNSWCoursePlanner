import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/menu';
import MenuItem from '@material-ui/core/menu';
import axios from 'axios'
import SubmitContext from '../../helpers/submitContext.js'

import React from 'react';


export default class EditProfile extends React.Component{

	static contextType = SubmitContext;


	constructor(props) {
		super(props)
		this.state = {
			open: false,
			data: {
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
	componentDidMount() {
		this.setState({
			data: {
				...this.state.data,
				email: this.props.email,
				degree: this.props.degree,
				year: this.props.year,
				gender: this.props.gender,
				about: this.props.about,
				hobbies: this.props.hobbies
			}
		})
		
	}


    handleClickOpen = (e) => {

    	const facebookID = window.localStorage.getItem('facebookId');
    	//update info
    	axios.get(`http://localhost:8080/getProfile?facebookId=${facebookID}`)
        .then(response=> {
        	this.setState({data: response.data})
        	console.log(this.state.data)
        })
        .then(response=> {
    		this.setState({open: true})
        })

  	};

	handleDialogClose = (e) => {
    	this.setState({open: false})
	};

	handleDialogSubmit = (e) => {
    	this.setState({open: false})

    	
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
		const {submit, setSubmit} = this.context
        setSubmit(!submit);
		
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
		                    label={this.state.data.email===undefined?"email":""}
		                    type="email"
		                    variant="outlined"
		                    fullWidth
		                    value={this.state.data.email}
		                    onChange={this.handleChange}
		                />
		                 <TextField
		                    autoFocus
		                    margin="dense"
		                    label={this.state.data.degree===undefined?"Degree":""}
		                    value={this.state.data.degree}
		                    type="degree"
		                    variant="outlined"
		                    fullWidth
		                    onChange={this.handleChange}
		                />
		                 <TextField
		                    autoFocus
		                    margin="dense"
		                    label={this.state.data.year===undefined?"year":""}
		                    value={this.state.data.year}
		                    type="year"
		                    variant="outlined"
		                    onChange={this.handleChange}
		                />
		                 <TextField
		                    autoFocus
		                    value={this.state.data.gender}
		                    margin="dense"
		                    label={this.state.data.gender===undefined?"Gender":""}
		                    type="gender"
		                    variant="outlined"
		                    onChange={this.handleChange}
		                />

		                <TextField
		                    autoFocus
		                    margin="dense"
		                    label={this.state.data.about===undefined?"About me":""}
		                    placeholder="about"
		                    value={this.state.data.about}
		                    //type="about"
		                    variant="outlined"
		                    fullWidth
		                    multiline	
		                    rows={3}
		                    onChange={this.handleChange}
		                /> 
		                <TextField
		                    aria-label="empty textarea" 
		                    value={this.state.data.hobbies}
		                    placeholder="hobbies" 
		                    label={this.state.data.hobbies===undefined?"hobbies":""}
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
