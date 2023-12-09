import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {
  const cartstate = useSelector(state => state.cartReducer);

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
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/login" style={{ color: '#fff', fontFamily: 'Arial, sans-serif' }}>
                Login
              </a>
            </li>
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
