import React from 'react';

import './style.css';

export default function InnerSq(props) {
  const boxStyle = {
    left: props.x,
    top: props.y,
    backgroundColor: props.color
  };
  return <div className="innerSq" style={boxStyle} />;
}
