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

const Game = ({game}) => {
    const classes = useStyles()
    return(
        <div className={classes.cardContainer}>
            <AnswerList game={game} />
        </div>
    )
}

export default Game
