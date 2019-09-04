import React from 'react';
import { withAuthorization } from '../Session';


const HomePage = () => (
  <>
    <h1>Hello!</h1>
    <h2>This is a job tracker I built in order to learn how to use Firebase's realtime database and auth API.</h2>
    <h3>It's a work in progress. I hope to add functionality with the Meetup API to track networking events, as well as implement a study tracker.</h3>
  </>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);