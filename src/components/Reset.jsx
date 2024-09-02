import React from 'react'
import GameState from './GameState'

const Reset = ({Reset,onReset}) => {
    if(GameState===GameState.inprogress){
        return;
    }
  return (
    <div onClick={onReset} className='reset-button'>
      Reset
    </div>
  )
}

export default Reset
