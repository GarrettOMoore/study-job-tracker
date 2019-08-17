import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';

const Navigation = ({ authUser }) => {
  return(
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  );
}

const NavigationAuth = () => {
  return(
    <div className='main-nav'>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={ROUTES.LANDING}>Landing</Nav.Link> 
            <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link> 
            <Nav.Link as={Link} to={ROUTES.JOB_TRACKER}>Job Tracker</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.STUDY_PLANNER}>Study Planner</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.ACCOUNT}>Account</Nav.Link> 
            <Nav.Link as={Link} to={ROUTES.ADMIN}>Admin</Nav.Link> 
            <SignOutButton />
          </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
      </Navbar>
  </div>
  )
};

const NavigationNonAuth = () => {
  return(
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to={ROUTES.SIGN_IN}>Sign In  </Nav.Link>  
          <Nav.Link to={ROUTES.LANDING}>Landing </Nav.Link> 
        </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}

export default Navigation;