import React from 'react';
import Home from './pages/home/home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Legal from './pages/legal/legal';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id" children={<Legal />} />
      </Switch>
    </Router>
  );
}
export default App;
