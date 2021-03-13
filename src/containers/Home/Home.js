import React from "react";
import LoginCard from "../../components/LoginCard";
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
            <LoginCard/>
        </div>
    )
}

export default Home
