import React from 'react';
import InnerSq from '../InnerSq';

import './style.css';


export default function ViewPort(props) {
  const { onKeyUp, color } = props;
  const { x, y, boxes, isGameOver} = props.state;
  return (
    <div contentEditable className="viewPort" onKeyUp={onKeyUp}>
      {!isGameOver ? <InnerSq x={x} y={y} color={color} /> : <p>Game Over</p>}
      {boxes.map((box, idx) => <InnerSq key={idx.toString()} x={box.x} y={box.y} />)}
    </div>
  );
}

// contentEditable