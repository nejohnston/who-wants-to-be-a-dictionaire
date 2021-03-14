import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, IconButton, Typography, CardMedia} from '@material-ui/core';
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

const GameCard = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    
  }

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
          Welcome
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <NavLink to='/game' className={classes.linkText}>
          <Button size="small">New Game</Button>
        </NavLink>
        <NavLink to='/' className={classes.linkText}>
          <Button size="small">Profile</Button>
        </NavLink>
        <NavLink to='/' className={classes.linkText}>
          <Button size="small">LeaderBoards</Button>
        </NavLink>
        <NavLink onClick to='/sign-up' className={classes.linkText}>
          <Button size="small">Sign Out</Button>
        </NavLink>
      </CardActions>
      <div className={classes.buttonContainer}>
        {/* <IconButton href="https://github.com/nejohnston/"  size="medium">
          <AiFillGithub className={classes.icon}/>
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/n-johnston/" size="medium">
          <AiFillLinkedin className={classes.icon}/>
        </IconButton> */}
        {/* <Button href="/Game">Game</Button> */}
        {/* <Button href="/sign-up"></Button> */}
      </div>
    </Card>
  );
}

export default GameCard
