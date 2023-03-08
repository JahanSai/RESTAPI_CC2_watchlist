import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import List from './components/List';
import Create from './components/Create';
import View from './components/View';
import Update from './components/Update';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {List}></Route>
                          <Route path = "/movies" component = {List}></Route>
                          <Route path = "/add/:id" component = {Create}></Route>
                          <Route path = "/edit/:id" component = {Update}></Route>
                          <Route path = "/view/:id" component = {View}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
