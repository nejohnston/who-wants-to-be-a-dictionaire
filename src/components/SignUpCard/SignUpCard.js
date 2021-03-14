import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography, TextField} from '@material-ui/core';
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 400,
  },
  cardContent: {
    // maxWidth: 500,
    marginBottom: 0,
    padding: 0
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
  pos: {
    marginBottom: 12,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  icon: {
    width: 50,
    height: 50
  },
  linkText: {
    textDecoration: "none",
    border: "1px solid",
    borderColor: "rgba(0, 0, 0, 0.3)",
    marginTop: 8
  }
});

const SignUpCard = () => {
  const classes = useStyles();

  return (
    <Card 
    className={classes.root} 
    variant="outlined"
    >
      <CardContent className={classes.cardContent}>
        <Typography 
        className={classes.title} 
        color="textPrimary"
        >
          SignUp
        </Typography>
        <TextField>Hello</TextField>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <NavLink to='/' className={classes.linkText}>
          <Button size="small">Back</Button>
        </NavLink>
        <NavLink to='/sign-in' className={classes.linkText}>
          <Button size="small">Sign In</Button>
        </NavLink>
      </CardActions>
      <div className={classes.buttonContainer}>
      </div>
    </Card>
  );
}

export default SignUpCard
