import React from 'react'
import GameState from './GameState'
const GameOver = ({gameState}) => {
  switch(gameState){
    case GameState.inprogress:
        return <></>;
    case GameState.playerOwins:
        return <div className="game-over">O wins</div>;
    case GameState.playerXwins:
        return <div className="game-over">X wins</div>;
    case GameState.draw:
            return <div className="game-over">draw</div>
    default:
        return <></>;
        
  }
}

export default GameOver
