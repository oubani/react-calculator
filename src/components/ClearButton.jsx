import React from 'react';
import './ClearButton.css';
const ClearButton = (props) => (
  <div className='clearButton' onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearButton;
