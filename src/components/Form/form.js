import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import RatingSystem from './rating.js';
import Time from './time.js';


function Form () {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return(
        <div className="createReview">
        <button onClick={handleClickOpen} className="addReview">
          Create a Review
        </button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <strong>Create a Review</strong>
            </DialogTitle>
            <DialogContent>
                <RatingSystem />
                <Time />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Lecturer's Name"
                    type="name"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    aria-label="empty textarea" 
                    placeholder="Enter Review..." 
                    fullWidth 
                    multiline
                    variant="outlined"
                    rows={4}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                     Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
      </div>
    );
}

export default Form;