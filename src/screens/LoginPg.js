import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions';

export default function LoginPg() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();

  const login = async () => {
    const userCredentials = {
      email,
      password,
    };

    try {
      await dispatch(loginUser(userCredentials));
      // Handle success, e.g., redirect or show a success message
      console.log("Login successful");
    } catch (error) {
      // Handle login failure, e.g., show an error message
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-left'>
          <h2 className='text-center m-2'>Login</h2>
          <div>
            <input
              required
              type='text'
              placeholder='email'
              className='form-control'
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type='password'
              placeholder='password'
              className='form-control'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <button onClick={login} className='btn mt-5'>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
