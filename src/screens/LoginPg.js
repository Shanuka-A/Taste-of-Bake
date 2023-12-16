import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import { FiArrowRight } from "react-icons/fi";

export default function LoginPg() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const loginState = useSelector(state => state.loginUserReducer);
  const { loading, error } = loginState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  const login = async () => {
    if (!email || !password) {
      setFormError('Please fill out all fields.');
      return;
    }

    setFormError('');

    const userCredentials = {
      email,
      password,
    };

    try {
      await dispatch(loginUser(userCredentials));
      console.log("Login successful");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div style={{
      background:`rgba(0, 0, 0, 0.5) url(${require('../Pic/nnnnn.jpg')}) center/cover no-repeat`,
      height: '100vh',
      backgroundSize: '100%',
      position: 'relative',
      overflow: 'hidden',
      
      
    }} >
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-left shadow p-3 mb-5 bg-white rounded'>
          <h2 className='text-center m-2'>Login</h2>

          {loading && (<Loading />)}
          {error && (<Error error='Invalid Credentials' />)}
          {formError && (
            <div className="alert alert-danger" role="alert">
              {formError}
            </div>
          )}

          <div>
            <input
              required
              type='text'
              placeholder='Email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br/>
            <button onClick={login} className='btn btn-outline-primary'>
              LOGIN <FiArrowRight />
            </button>
            <br />
            <a style={{ color: 'black' }} href='/register'>Click Here To Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
