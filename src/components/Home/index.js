import React from 'react';
import { withAuthorization } from '../Session';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import JobTracker from '../JobTracker';
import StudyPlanner from '../StudyPlanner';

const HomePage = () => (
  <Router>
    <div className='user-nav'>
      <h1>User Portal</h1>
      <Link to={ROUTES.JOB_TRACKER}>Job Tracker</Link> {" || "}
      <Link to={ROUTES.STUDY_PLANNER}>Study Planner</Link>
    </div>
    <Route path={ROUTES.JOB_TRACKER} component={JobTracker} />
    <Route path={ROUTES.STUDY_PLANNER} component={StudyPlanner} />
  </Router>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);