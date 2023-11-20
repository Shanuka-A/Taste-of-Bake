import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
export default function CartsPg() {

    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
  return (
    <div>
        <div className='row justify-content-center'>

            <div className='col-md-6'>
                <h2 style={{fontSize:'30px'}}>My Cart</h2>

                {cartItems.map(item=>{
                  return <div className='flex-container'>

                  <div className='text-left m-1 w-100'>
                     <h1>{item.name} [{item.varient}]</h1>
                     <h1>Price : {item.quantity}*{item.prices[0][item.varient]} = {item.price}</h1>
                     <h1 style={{display:'inline'}}>Quantity : </h1>
                     <i className="fa fa-plus" aria-hidden="true"></i>
                     <b>{item.quantity}</b>
                     <i className="fa fa-minus" aria-hidden="true"></i>
                     <hr/>
                  </div>

                  <div className='m-1 w-100'>
                     <img src={item.image} style={{height:'80px', height:'80px'}}/>
                  </div>

                  <div className='m-1 w-100'>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                  </div>
                </div>
                })}

                
            </div>

            <div className='col-md-4'>
                
            </div>
        </div>
    </div>
  )
}
