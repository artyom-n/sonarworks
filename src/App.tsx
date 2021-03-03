import React from 'react';
import Home from './pages/home/home'
import Privacy from './pages/privacy/privacy'
import Partnership from './pages/partnership/partnership'
import Terms from './pages/terms/terms'
import Cookies from './pages/cookies/cookies'
import Support from './pages/support/support'
import Truefi from './pages/truefi/truefi'
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      <Route exact path="/partnership">
        <Partnership />
      </Route>
      <Route exact path="/terms">
        <Terms />
      </Route>
      <Route exact path="/cookies">
        <Cookies />
      </Route>
      <Route exact path="/support">
        <Support />
      </Route>
      <Route exact path="/truefi">
        <Truefi />
      </Route>
    </Router>
  );
}
export default App;
