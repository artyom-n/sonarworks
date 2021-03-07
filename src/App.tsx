import React from 'react';
import Home from './pages/home/home'
import Legal from './pages/legal/legal';
import Policy from './pages/policy/policy';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/legal">
          <Legal />
        </Route>
        <Route path="/:policy" children={<Policy />} />
      </Switch>
    </Router>
  );
}
export default App;
