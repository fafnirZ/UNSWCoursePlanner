import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/menu';
import MenuItem from '@material-ui/core/menu';


import React from 'react';


export default function EditProfile(props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
    	setOpen(true);
  	};

	const handleDialogClose = () => {
		setOpen(false);
	};

	const handleDialogSubmit = () => {
		setOpen(false);
		
	}


	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
    	setAnchorEl(null);
  	};

	return(
		[<button onClick={handleClickOpen}>
			edit profile
		</button>,
		<Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <strong>Edit profile</strong>
            </DialogTitle>
            <DialogContent>

                 <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                />
                 <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Degree"
                    type="degree"
                    variant="outlined"
                    fullWidth
                />
                 <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="year"
                    type="year"
                    variant="outlined"
                />
                 <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Gender"
                    type="gender"
                    variant="outlined"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="About me"
                    type="about"
                    variant="outlined"
                    fullWidth
                    multiline	
                    rows={3}
                /> 
                <TextField
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
                <Button onClick={handleDialogClose} color="primary">
                     Cancel
                </Button>
                <Button onClick={handleDialogSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>]
	);

};
