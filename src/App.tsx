import React from 'react';
import Home from './pages/home/home'
import Tracks from './pages/tracks/tracks';
import Legal from './pages/legal/legal';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tracks">
          <Tracks />
        </Route>
        <Route path="/:id" children={<Legal />} />
      </Switch>
    </Router>
  );
}
export default App;
