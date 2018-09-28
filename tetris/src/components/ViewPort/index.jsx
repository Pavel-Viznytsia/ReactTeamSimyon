import React from 'react';
import InnerSq from '../InnerSq';
import Button from '../Button';

import './style.css';


export default function ViewPort(props) {
  const { onKeyUp, color, playAgain } = props;
  const { x, y, boxes, isGameOver} = props.state;
  return (
    <div contentEditable className="viewPort" onKeyUp={onKeyUp}>
      {!isGameOver ? <InnerSq x={x} y={y} color={color} /> : <p className = "gameOver">Game Over</p>}
      {boxes.map((box, idx) => <InnerSq key={idx.toString()} x={box.x} y={box.y} />)}
      {isGameOver && <Button className='playAgainBtn' onClick = {playAgain}>Play again ?</Button>}
    </div>
  );
}