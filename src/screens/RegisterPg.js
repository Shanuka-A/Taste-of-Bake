import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Success from '../Components/Success';
import Loading from '../Components/Loading';
import Error from '../Components/Error';

export default function RegisterPg() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [formError, setFormError] = useState('');
  const registerState = useSelector(state => state.registerUserReducer);
  const { error, loading, success } = registerState;
  const dispatch = useDispatch();

  const register = async () => {
    if (!name || !email || !password || !cpassword) {
      setFormError('Please fill out all fields.');
      return;
    }

    if (password !== cpassword) {
      setFormError('Passwords do not match.');
      return;
    }

    setFormError('');

    const user = {
      name,
      email,
      password,
    };

    try {
      await dispatch(registerUser(user));
      console.log("Registration successful");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div style={{
      background:`rgba(0, 0, 0, 0.5) url(${require('../Pic/nnnnn.jpg')}) center/cover no-repeat`,
      height: '100vh',
      backgroundSize: '100%',
      position: 'relative',
      overflow: 'hidden',
      
      }}>

      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-left shadow p-3 mb-5 bg-white rounded'>
          {error && (<Error error='This Email is Already Used' />)}
          {loading && (<Loading />)}
          {success && (<Success success='User Registered Successfully' />)}
          {formError && (
            <div className="alert alert-danger" role="alert">
              {formError}
            </div>
          )}

          <h2 className='text-center m-2'>Register</h2>
          <div>
            <input
              required
              type='text'
              placeholder='Name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type='password'
              placeholder='Confirm Password'
              className='form-control'
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
            <br/>
            <button onClick={register} className='btn btn-outline-danger' >
              REGISTER
            </button>
            <br />
            <a style={{ color: 'black' }} href='/login'>Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
