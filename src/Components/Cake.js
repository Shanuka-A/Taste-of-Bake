import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Corrected import
export default function Cake({ cake }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');
  const addToCart = () => {
    alert(`Added ${quantity} ${varient} ${cake.name} to the cart.`);
  };

  return (
    <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>

      <div onClick={handleShow}>
        <h1>{cake.name}</h1>
        <img src={cake.image} className="img-fluid" style={{ height: '200px' }} />
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
          <h1 className='mt-1'>Price : Rs/-{cake.prices[0][varient] * quantity} </h1>
        </div>
        <div className='m-1 w-100'>
          <button className="btn btn-danger" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{cake.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={cake.image} style={{height:'400px'}}/>
          <p>{cake.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Close </button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}
