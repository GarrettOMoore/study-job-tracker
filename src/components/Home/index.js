import React from 'react';
import { withAuthorization } from '../Session';


const HomePage = () => (
  <p>&hearts;</p>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);