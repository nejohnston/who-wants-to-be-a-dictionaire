import React, {Component} from 'react'

import Game from './Game'

// import projectData from '../../config/Game.json'

class GameContainer extends Component {
  
    render() {
        return (
            <Game />
            // <Game game={projectData}/>
        );
    }
}

export default GameContainer
