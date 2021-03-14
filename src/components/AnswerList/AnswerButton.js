import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Card, CardActions, CardContent, Typography} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language'
import {AiFillGithub} from 'react-icons/ai'

const useStyles = makeStyles({
  cardContainer: {
    minWidth: 275,
    width: 300,
    // height: 200
  },
  cardContent: {
    paddingBottom: 0
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    paddingLeft: 0,
    paddingRight: 0
  },
  title: {
    fontSize: 20,
    paddingTop: 10
  },
  pos: {
    paddingBottom: 10
  }
});

const LoginCard = ({project, imageUrl}) => {
  const classes = useStyles();
  
  return (
      <Card className={classes.cardContainer} variant="outlined">
        <CardContent className={classes.cardContent}>
      {/* <CardMedia
      image={imageArray[project.image]}
      className={classes.media} 
      /> */}
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {project.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {project.language}
          </Typography>
          <Typography variant="body2" component="p">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.buttonContainer}>
        <IconButton href={project.github} className={classes.icon}><AiFillGithub/></IconButton>
        {project.link ? <IconButton href={project.link} className={classes.icon}><LanguageIcon/></IconButton> : false}
        </CardActions>
    </Card>
  );
}

export default LoginCard
