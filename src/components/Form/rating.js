import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

  const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
    },
  });

function RatingSystem () {
const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Box>
            <Typography component="legend">Course Rating: </Typography>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
            />
            {value !== null}
        </Box>
    </div>
  );
}

export default RatingSystem;
