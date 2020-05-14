import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import about from "./component/about"
import background from "./component/background"
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={about} />
      <Route path="background" component={background} />
    </Router>
  );
}

export default App;
