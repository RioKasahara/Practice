import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sidebar from './Sidebar';
import Menu2 from './Menu2';
import Button from './Button';
import reportWebVitals from './reportWebVitals';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/sidebar" component={Sidebar} />
      <Route path="/menu2" component={Menu2} />
      <Route path="/button" component={Button} />
      <Redirect from="/" to="/app" />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
