import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import AnswerButton from './AnswerButton'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexGrow: 1,
    maxWidth: 1200,
    marginTop: 60
  },
  paper: {
    height: 140,
    width: 100,
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  gridItem: {
    paddingBottom: "20px !important"
  }
}));

const AnswerList = ({answer}) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
        {answer.map((project) => (
          <Grid item className={classes.gridItem} key={project.title} imageUrl={project.image}>
            <AnswerButton project={project} key={project}/>
          </Grid>
        ))}
    </Grid>
  );
}

export default AnswerList