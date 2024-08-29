import React, { useState } from 'react';
import './TicTacToe.css';
import cross from '../Assets/o.png';
import circle from '../Assets/x.png';

const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const checkWinner = () => {
    // Logic to check for winning combinations and set lock
    // You'll need to implement this function to check for winning patterns
  };

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'/>`;
      setData([...data.slice(0, num), 'x', ...data.slice(num + 1)]);
    } else {
      e.target.innerHTML = `<img src='${circle}'/>`;
      setData([...data.slice(0, num), 'o', ...data.slice(num + 1)]);
    }
    setCount(++count);
    checkWinner(); // Check for winner after each move
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false); // Reset lock flag to allow further moves
  };

  return (
    <div className="container">
      <h1 className="title">Tic-Tac-Toe <span>In React</span></h1>

      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;