import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'
import { LandingPage } from './components/LandingPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
