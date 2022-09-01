import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const App = () => (
  <div className="page">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </BrowserRouter>
  </div>
);

export default App;
