import React from 'react';
import {connect} from 'react-redux';

//styling
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const SmurfList = (props) => {
    const classes = useStyles();

    return (
        <div>
            {props.error ? (
                <div>{props.error}</div>
            ): (
                props.smurfs.map(smurf => 
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" component="h2">{smurf.name}</Typography>
                            <Typography variant="body2" component="p">Age: {smurf.age} yrs</Typography>
                            <Typography variant="body2" component="p">height: {smurf.height}</Typography>
                        </CardContent>
                    </Card>
                )
            )}
        </div>
    );
};

const mapStateToProps = state => {
   return {
       smurfs: state.smurfs,
       error: state.error
   }
}

export default connect(mapStateToProps, {})(SmurfList);