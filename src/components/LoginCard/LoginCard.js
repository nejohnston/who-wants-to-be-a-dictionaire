import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, IconButton, Typography, CardMedia} from '@material-ui/core';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {NavLink} from 'react-router-dom'
import SignIn from './SignIn';

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

const LoginCard = () => {
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
          Sign In
        </Typography>
          <SignIn/>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <NavLink to='/' className={classes.linkText}>
          <Button size="small">Back</Button>
        </NavLink>
        <NavLink to='/sign-up' className={classes.linkText}>
          <Button size="small">Sign Up</Button>
        </NavLink>
      </CardActions>
      <div className={classes.buttonContainer}>
        {/* <IconButton href="https://github.com/nejohnston/"  size="medium">
          <AiFillGithub className={classes.icon}/>
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/n-johnston/" size="medium">
          <AiFillLinkedin className={classes.icon}/>
        </IconButton> */}
        {/* <Button href="/login">Login</Button> */}
        {/* <Button href="/sign-up"></Button> */}
      </div>
    </Card>
  );
}

export default LoginCard
