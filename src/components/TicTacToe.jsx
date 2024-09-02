import React, { useEffect, useState } from 'react';
import Board from './Board';
import GameOver from './GameOver';
import GameState from './GameState';
import Reset from './Reset';
import GameOverSoundAsset from "../sounds/game_over.wav"
import ClickSoundAsset from  "../sounds/click.wav";

const GameOverSound=new Audio(GameOverSoundAsset);
GameOverSound.volume=0.2;
const ClickSound=new Audio(ClickSoundAsset);
ClickSound.volume=0.5;


const player_x = "X";
const player_o = "O";

const WinningCombination = [
  // row
  { combo: [0, 1, 2], strike: "strike-row-1" },
  { combo: [3, 4, 5], strike: "strike-row-2" },
  { combo: [6, 7, 8], strike: "strike-row-3" },

  // column
  { combo: [0, 3, 6], strike: "strike-column-1" },
  { combo: [1, 4, 7], strike: "strike-column-2" },
  { combo: [2, 5, 8], strike: "strike-column-3" },

  // diagonal
  { combo: [0, 4, 8], strike: "strike-diagonal-1" },
  { combo: [2, 4, 6], strike: "strike-diagonal-2" },
];

function checkWinners(tiles, setStrike, setGameState) {
  for (const { combo, strike } of WinningCombination) {
    const tileval1 = tiles[combo[0]];
    const tileval2 = tiles[combo[1]];
    const tileval3 = tiles[combo[2]];

    if (tileval1 !== null && tileval1 === tileval2 && tileval1 === tileval3) {
      setStrike(strike);
      if (tileval1 === player_x) {
        setGameState(GameState.playerXwins);
      } else {
        setGameState(GameState.playerOwins);
      }
      return; // Exit the loop once a winner is found
    }
  }

  // Check for a draw (all tiles filled and no winner)
  if (tiles.every((tile) => tile !== null)) {
    setGameState(GameState.draw);
  }
}

const TicTacToe = () => {
  const [playerTurn, setPlayerTurn] = useState(player_x);
  const [gameState, setGameState] = useState(GameState.inprogress);
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [strike, setStrike] = useState();
  const [reset, setReset] = useState(false);

  useEffect(() => {
    checkWinners(tiles, setStrike, setGameState);
  }, [tiles]);

  useEffect(()=>{
    if(tiles.some((tiles)=>tiles!==null)){
        ClickSound.play();
    }
 },[tiles])

 useEffect(()=>{
    if(gameState!==gameState.inprogress){
        GameOverSound.play();
    }
 },[gameState])

  const handleClick = (index) => {
    if (tiles[index] !== null || gameState !== GameState.inprogress) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === player_x) {
      setPlayerTurn(player_o);
    } else {
      setPlayerTurn(player_x);
    }
  };

  const handleReset = () => {
    setGameState(GameState.inprogress);
    setPlayerTurn(player_x);
    setStrike(null);
    setTiles(Array(9).fill(null));
    setReset(true); // Update the reset state to trigger a re-render
  };

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleClick} strikeClass={strike} />
      <GameOver gameState={gameState} />
      <Reset reset={reset} onReset={handleReset} />
    </div>
  );
};

export default TicTacToe;