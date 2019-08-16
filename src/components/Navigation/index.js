import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

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
    <div>
      <ul>
        <li>
          <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.SIGN_IN}>Sign In  </Link>  {' | '}
        </li>
        <li>
          <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.LANDING}>Landing </Link> {' | '}
        </li>
        <li>
          <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.HOME}>Home </Link> {' | '}
        </li>
        <li>
          <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.ACCOUNT}>Account </Link> {' | '}
        </li>
        <li>
          <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.ADMIN}>Admin</Link> {' | '}
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
  </div>
  )
};

const NavigationNonAuth = () => {
  return(
    <ul>
      <li>
        <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.LANDING}>Landing </Link> {' | '}
      </li>
      <li>
      <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.SIGN_IN}>Sign In </Link> {' | '}
      </li>
    </ul>
  )
}

export default Navigation;