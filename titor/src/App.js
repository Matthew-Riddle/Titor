import React from 'react'
import MainContainer from './components/MainContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <MainContainer />
          <Switch>
            <Route path='/' exact />
          </Switch>
      </Router>
    </>
  );
}

export default App;
