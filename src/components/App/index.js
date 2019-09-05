import React from 'react';
import '../../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import JobTracker from '../JobTracker';
import Events from '../Events';
import StudyPlanner from '../StudyPlanner';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';


const App = () => {
  return(
        <main className="App">
          <Router>
            <div>
              <h1>Job Tracker</h1>
              <h3>Built With React + Firebase</h3>
              <Navigation />
              <Route exact path={ROUTES.LANDING} component={HomePage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.ADMIN} component={AdminPage} />
              <Route path={ROUTES.JOB_TRACKER} component={JobTracker} />
              <Route path={ROUTES.EVENTS} component={Events} />
              <Route path={ROUTES.STUDY_PLANNER} component={StudyPlanner} />
            </div>
          </Router>
        </main>
    )
  };

export default withAuthentication(App);
