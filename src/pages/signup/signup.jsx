import React, { useState } from 'react';
import { useFirebase } from "../../context/Firebase";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    firebase.signUpUserwithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" placeholder='Email' value={email}
          onChange={handleEmailChange} />
          <label>Password:</label>
          <input type="password" placeholder='Password' value={password}
          onChange={handlePasswordChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
