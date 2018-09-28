import React from 'react';

import './styles.css';

export default function Button({onClick, className}) {
  return <button className = {className} onClick = { onClick }> Play again ?</button>
}