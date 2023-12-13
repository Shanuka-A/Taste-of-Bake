import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import { FaShoppingCart, FaInfoCircle, FaList, FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  const iconColor = 'blue'; // Set the desired color for icons

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg mb-5 " >
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
          <ul id='navbar' className="navbar-nav ml-auto">
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
                    <FaList color={iconColor} /> Orders
                  </a>
                  <a className="dropdown-item" href="#" onClick={() => { dispatch(logoutUser()) }}>
                    <FaSignOutAlt color={iconColor} /> Logout
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
              <a className="nav-link" href="/cart" >
                <FaShoppingCart color={iconColor} /> Cart{' '}
                <span className="badge badge-pill badge-light">{cartstate.cartItems.length}</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/aboutus" >
                <FaInfoCircle color={iconColor} /> About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
