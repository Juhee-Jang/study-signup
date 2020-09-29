import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
