import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllCakesReducer } from './reducers/cakeReducers';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer } from './reducers/userReducer.js';
import { loginUserReducer } from './reducers/userReducer'

const finalReducer = combineReducers({

  getAllCakesReducer: getAllCakesReducer,
  cartReducer: cartReducer,
  registerUserReducer : registerUserReducer,
  loginUserReducer: loginUserReducer
});

const cartItems= localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]

const currentUser= localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) :null

const initialState = {
  cartReducer:{
  cartItems: cartItems
  },
  loginUserReducer :{
    currentUser: currentUser
  }
};


const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
