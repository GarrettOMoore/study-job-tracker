import React from 'react';
import { withAuthorization } from '../Session';


const HomePage = () => (
  <p>HOME</p>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);