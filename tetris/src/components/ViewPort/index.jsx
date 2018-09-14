import React from 'react';
import InnerSq from '../InnerSq';

import './style.css';


export default function ViewPort(props) {
  return (
    <div contentEditable  className="viewPort" onKeyUp={props.onKeyUp}>
      {props.state.boxes.map((box, idx) => <InnerSq key={idx.toString()} x={box.x} y={box.y} />)}
      <InnerSq x={props.state.x} y={props.state.y} color={props.color} />
    </div>
  );
}
