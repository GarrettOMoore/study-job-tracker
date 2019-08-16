import React from 'react';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page Stuff</h1>
    <p>The Home Page is accessible by every sign in user.</p>
    <p>Deeper user nav components here...</p>
    <p>Job Tracker</p>
    <p>Study Planner</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);