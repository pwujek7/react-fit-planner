import React, { useState } from 'react';
import {
  connect,
  useSelector
} from 'react-redux';

import { signIn } from '../../actions/authActions';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  const { loginError, loginErrorMessage } = auth;

  return (
    <form onSubmit={handleSubmit}>
      Login form
      <br />
      <label htmlFor="email">e-mail:</label>
      <input name="email" type="text" value={email} onChange={handleEmailChange} />
      <br />
      <label htmlFor="password">password:</label>
      <input name="password" type="password" value={password} onChange={handlePasswordChange} />
      <br />
      {
        loginError && <p>{loginErrorMessage}</p>
      }
      <button type="submit">Login</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(signIn(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Login);
