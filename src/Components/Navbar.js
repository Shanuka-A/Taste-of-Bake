import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/userActions';

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch=useDispatch()

  const gradientStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '10px 20px',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg mb-5 rounded" style={gradientStyle}>
        <a className="navbar-brand" href="/" style={{ color: '#fff', fontFamily: 'Arial, sans-serif' }}>
          Taste of Bakes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Orders
                  </a>
                  <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}>
                    <li>Logout</li>
                  </a>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cart" style={{ color: '#fff', fontFamily: 'Arial, sans-serif' }}>
                Cart{' '}
                <span className="badge badge-pill badge-light">{cartstate.cartItems.length}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
