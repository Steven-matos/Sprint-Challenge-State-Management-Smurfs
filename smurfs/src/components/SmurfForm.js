import React from 'react';
import { connect } from 'react-redux';
import {postData} from '../actions';

//Styles
import './App.css';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    button: {
        margin: '1rem auto',
        width: '40%'
    },
}));

const progressBar = makeStyles(theme => ({
    root: {
        '& > * + *': {
            margin: '0 auto',
        },
    },
}));

const SmurfForm = (props) => {

    const barclasses = progressBar();
    const classes = useStyles();
    
    const handleSubmit = e => {
        console.log(e.target.value)
       // props.postData(e.target.value);
    }
    
    return (  
        <div>
        {props.isPostingData ? (
            <div className={barclasses.root}>
                <CircularProgress color="secondary" className='loader'/>
            </div>
        ) : (
            <form className='form-container' onSubmit={handleSubmit}>
                <h2>Add a Smurf</h2>
                <input type='text' placeholder='Name' id='name' />
                <input type='text' placeholder='Age' id='age' />
                <input type='text' placeholder='Height' id='height' />
                <Button type='submit' variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>}>Send </Button>
            </form>
        )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isPostingData: state.isPostingData
    }
}

export default connect(
    mapStateToProps,
     {postData}
     )(SmurfForm);