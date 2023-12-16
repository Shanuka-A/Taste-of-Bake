import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
export default function CartsPg() {

  const cartstate = useSelector(state => state.cartReducer)
  const cartItems = cartstate.cartItems
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
  const dispatch = useDispatch()
  return (
    <div>
      <div className='row justify-content-center'>

        <div className='col-md-6'>
          <h2 style={{ fontSize: '40px', color: 'Red', textAlign: 'center' }}>My Cart</h2>



          {cartItems.map(item => {
            return <div className='flex-container shadow-lg p-3 mb-5 bg-white rounded'>

              <div className='text-left m-1 w-100'>
                <h1>{item.name} [{item.varient}]</h1>
                <br />
                <h1>Price : {item.quantity}*{item.prices[0][item.varient]} = Rs/- {item.price}</h1>
                <br />
                <h1 style={{ display: 'inline' }}>Quantity : </h1>
                <br />
                <i className="fa fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                <b>{item.quantity}</b>
                <i className="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>
                <hr />
              </div>

              <div className='m-1 w-100'>
                <img src={item.image} style={{ height: '180px', height: '200px' }} />
              </div>

              <div className='m-1 w-100'>
                <i className="fa fa-trash" aria-hidden="true" style={{ fontSize: '35px' }} onClick={() => { dispatch(deleteFromCart(item)) }}></i>
            
              </div>

            </div>
          })}

          <br />
          <br />
          <br />
          <br />
          <br />



        </div>

        <div className='col-md-4 text-right mt-5'>
          <h2 style={{ fontSize: '30px', color: 'Green' }}>
            Sub Total: Rs {subtotal} /-
          </h2>
          <button className='btn btn-outline-secondary mt-3 mr-2 m-1'>CHECK OUT</button>
          <button className='btn btn-outline-primary mt-3 mr-2 m-1'>ORDER NOW</button>

        </div>

      </div>
    </div>
  )
}
