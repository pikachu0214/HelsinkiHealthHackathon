import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import LoginPage from './components/LoginPage';
import ScreenTwo from './components/ScreenTwo';
import Main from './components/Main';
const App = () => (
  <BrowserRouter>
    <div className="container App">
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/ScreenTwo" component={ScreenTwo} exact />
        <Route path="/Main" component={Main} exact />
      </Switch>
    </div>
  </BrowserRouter>
);


export default App;
