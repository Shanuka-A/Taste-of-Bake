import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userActions';

export default function RegisterPg() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const registerState = useState(state =>state.registerUserReducer)
  const dispatch = useDispatch();


  const register = async () => {
    if (password !== cpassword) {
      console.log("Password is not matched");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    try {
      await dispatch(registerUser(user));
      // Handle success, e.g., redirect or show a success message
      console.log("Registration successful");
    } catch (error) {
      // Handle registration failure, e.g., show an error message
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-left shadow p-3 mb-5 bg-white rounded'>
          <h2 className='text-center m-2'>Register</h2>
          <div>
            <input
              required
              type='text'
              placeholder='name'
              className='form-control'
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
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
            <input
              type='password'
              placeholder='confirm password'
              className='form-control'
              value={cpassword}
              onChange={(e) => setcpassword(e.target.value)}
              required
            />
            <button onClick={register} className='btn mt-5'>
              REGISTER
            </button>
            <br/>
            <a style={{color:'black'}} href='/login'>Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
