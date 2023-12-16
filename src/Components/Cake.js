import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart as addToCartAction } from '../actions/cartActions';

export default function Cake({ cake }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [varient, setVarient] = useState(cake.varients[0] || 'small');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCartAction(cake, quantity, varient));
  }

  return (
    <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded cake-item'>
      <div onClick={handleShow}>
        <h1>{cake.name}</h1>
        <img src={cake.image} className="img-fluid" style={{ height: '200px' }} alt="Cake" />
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Variants</p>
          <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
            {cake.varients.map((variant) => (
              <option value={variant} key={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
            {[...Array(10).keys()].map((i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className='m-1 w-100'>
          <h1 className='mt-1'>Price: 
            {cake.prices && cake.prices.length > 0 && cake.prices[0][varient]
              ? `Rs/- ${cake.prices[0][varient] * quantity}`
              : 'Price not available'}
          </h1>
        </div>
        <div className='m-1 w-100'>
          <button className="btn btn-danger" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{cake.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={cake.image} style={{ height: '400px' }} alt="Cake" />
          <p>{cake.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
