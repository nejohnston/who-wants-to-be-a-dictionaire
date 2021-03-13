import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    cardContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

const About = () => {
    const classes = useStyles()
    return(
    <div className={classes.cardContainer}>
        hello
    </div>
)}

export default About
