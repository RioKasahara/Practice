import React from 'react';
import './App.css';
// import MenuIcon from '@material-ui/icons/Menu';

const App = () => {
  const showMassage = () => {
    alert('Hello!');
  }
  return (
    <div className="Body" id="root">
      <div className="Top" id="root" onClick={showMassage}>
        RIO KASAHARA PROFILE SITE
        <div className="Menu" id="root" onClick={showMassage}>
          <li>HOME</li>
          <li>PROFILE</li>
          <li>GALLERY</li>
          <li>SNS</li>
          <li>CONTACT</li>
        </div>
      </div>
    </div>
  );
}

export default App;