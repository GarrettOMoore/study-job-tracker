import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => {
  return(
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
        <h1>Account Page</h1>
        {console.log(authUser)}
        <p>Greetings, {authUser.email}</p>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
      )}
    </AuthUserContext.Consumer>
  );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);