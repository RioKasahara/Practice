import React from 'react';
import './App.css';

const Slide = () => {
  const showMassage = () => {
    alert('Hello');
  }
  return (
    <div className='App' id='root' onClick={showMassage}>
      <h1>Hello React!</h1>
    </div>
  );
}

export default Slide;
