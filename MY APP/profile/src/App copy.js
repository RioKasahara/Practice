import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import page1 from './page1';
import page2 from './page2';
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={page1} />
          <Route exact path="/page2" component={page2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;