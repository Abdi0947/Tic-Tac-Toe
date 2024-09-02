import React from 'react'
const Tile = ({className,value,onClick,playerTurn={playerTurn}}) => {
    let hoverclass= null;
    if(value==null&&playerTurn!=null){
        hoverclass=`${playerTurn.toLowerCase()}-hover`
        console.log(hoverclass);
        
    }
  return (
    <div  onClick={onClick}className={`tile ${className} ${hoverclass}`}>
      {value}
    </div>
  )
}

export default Tile
