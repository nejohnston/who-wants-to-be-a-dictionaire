import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import LoginCard from '../../components/LoginCard'
import SignUpCard from '../../components/SignUpCard'

const useStyles = makeStyles({
  cardContainer: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }
});

console.log("hash"+window.location.hash)

const AccountHandler = ({signUpOrLogin}) => {
    const classes = useStyles()
    console.log("signUpOrLogin"+signUpOrLogin)
    return(
        <div className={classes.cardContainer}>
            {(signUpOrLogin === "#/sign-in") ? <LoginCard/> : <SignUpCard/>}
        </div>
    )
}

export default AccountHandler
