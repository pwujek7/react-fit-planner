import React, { useState } from 'react';
import {
  connect,
  useSelector
} from 'react-redux';

import { signUp } from '../../actions/authActions';

const Register = ({ register }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

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
    register({ username, email, password });
  };

  const { signupError, signupErrorMessage } = auth;

  return (
    <form onSubmit={handleSubmit}>
      Register form
      <br />
      <label htmlFor="username">
        username:
        <input type="text" name="username" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label htmlFor="email">
        email:
        <input type="text" name="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label htmlFor="password">
        password:
        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      {
        signupError && <p>{signupErrorMessage}</p>
      }
      <button type="submit">Sign Up</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => dispatch(signUp(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Register);
