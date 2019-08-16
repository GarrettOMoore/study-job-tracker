import React from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Nav.Link onClick={firebase.doSignOut}> Sign Out </Nav.Link> 
  // <button type="button" onClick={firebase.doSignOut}>
  //   Sign Out
  // </button>
);

export default withFirebase(SignOutButton);