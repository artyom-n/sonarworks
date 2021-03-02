import React from 'react';
import Home from './pages/home/home'
import About from './pages/about/about'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const App = () => {

  return (
      <Router>      
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>       
      </Router>
  );
}
export default App;
