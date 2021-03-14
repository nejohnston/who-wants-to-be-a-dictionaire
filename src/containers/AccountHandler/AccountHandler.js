import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import LoginCard from '../../components/LoginCard'
import SignUpCard from '../../components/SignUpCard'
import GameCard from "../../components/GameCard";

const useStyles = makeStyles({
  cardContainer: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }
});

const AccountHandler = ({isLoggedIn, signUpOrLogin}) => {
    const classes = useStyles()
    return(
        <div className={classes.cardContainer}>
            {(isLoggedIn) ? <GameCard /> : (signUpOrLogin === "#/sign-in") ? <LoginCard/> : <SignUpCard/>}
        </div>
    )
}

export default AccountHandler
