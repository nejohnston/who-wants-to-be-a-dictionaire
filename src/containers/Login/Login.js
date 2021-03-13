import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AnswerList from '../../components/AnswerList'

const useStyles = makeStyles({
  cardContainer: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }
});

const Login = ({login}) => {
    const classes = useStyles()
    return(
        <div className={classes.cardContainer}>
            <AnswerList login={login} />
        </div>
    )
}

export default Login
