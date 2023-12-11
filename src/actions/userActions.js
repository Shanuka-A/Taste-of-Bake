import axios from 'axios';

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_REGISTER_REQUEST' });

  try {
    const response = await axios.post('/api/users/register', user);
    console.log(response);
    dispatch({ type: 'USER_REGISTER_SUCCESS' }); 
  } catch (error) {
    dispatch({ type: 'USER_REGISTER_FAILED' }); 
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN_REQUEST' }); // Fixed the action type

  try {
    const response = await axios.post('/api/users/login', user);
    console.log(response);
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data }); 
    localStorage.setItem('currentUser', JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: 'USER_LOGIN_FAILED', payload: error }); 
  }
};