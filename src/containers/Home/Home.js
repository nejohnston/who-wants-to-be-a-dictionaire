import React from "react";
import WelcomeCard from "../../components/WelcomeCard";
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

const Home = () => {
    const classes = useStyles()
    return(
        <div className={classes.cardContainer}>
            <WelcomeCard/>
        </div>
    )
}

export default Home
