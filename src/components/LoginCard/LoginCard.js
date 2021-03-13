import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, IconButton, Typography, CardMedia} from '@material-ui/core';
import profilePicture from '../../config/assets/images/wwtbam-hero.jpeg'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
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

const LoginCard = () => {
  const classes = useStyles();

  return (
    <Card 
    className={classes.root} 
    variant="outlined"
    >
      <CardContent className={classes.cardContent}>
        <CardMedia
        className={classes.media} 
        image={profilePicture}
        />
        <Typography 
        className={classes.title} 
        color="textPrimary"
        >
          WHO WANTS TO BE A DICTIONAIRE
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <NavLink to='/Game' className={classes.linkText}>
          <Button size="small">Game</Button>
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
